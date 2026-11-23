// Shadowfax production rate quote. Never expose the API token to the browser.
export async function onRequestGet({ request, env }) {
  const json = (body, status = 200) => new Response(JSON.stringify(body), {
    status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
  });
  try {
    const origin = "456010";
    const params = new URL(request.url).searchParams;
    const pin = String(params.get("pincode") ?? "").trim();
    const weight = Number(params.get("weightKg") ?? 1);
    if (!/^[1-9][0-9]{5}$/.test(pin) || !Number.isFinite(weight) || weight <= 0 || weight > 2)
      return json({ error: "Enter a valid 6-digit PIN and weight up to 2 kg." }, 400);
    if (!env.SHADOWFAX_PRODUCTION_TOKEN) return json({ error: "Production rate service is not configured." }, 503);
    const response = await fetch("https://dale.shadowfax.in/api/v1/clients/rate_calculator/", {
      method: "POST",
      signal: AbortSignal.timeout(8000),
      headers: { "Authorization": "Token " + env.SHADOWFAX_PRODUCTION_TOKEN, "Content-Type": "application/json" },
      body: JSON.stringify({ origin_pincode: Number(origin), destination_pincode: Number(pin), service: "forward", weight })
    });
    const quote = await response.json().catch(() => ({}));
    if (!response.ok) return json({ error: "Carrier quote unavailable.", status: response.status }, 502);
    if (quote.message !== "Success" || quote.shipping_rate == null || quote.gst == null)
      return json({ available: false, message: "Rate unavailable for this PIN pair." });
    const base = Number(quote.shipping_rate), gst = Number(quote.gst);
    if (!Number.isFinite(base) || !Number.isFinite(gst) || base < 0 || gst < 0)
      return json({ error: "Invalid carrier quote." }, 502);
    const totalPaise = Math.round((base + gst) * 100);
    const deliveryFee = Math.ceil(totalPaise / 1000) * 10;
    return json({ available: true, originPincode: origin, destinationPincode: pin, zone: quote.zone,
      baseRate: base, gst, total: totalPaise / 100, deliveryFee, environment: "production" });
  } catch {
    return json({ error: "Unable to calculate rate right now." }, 502);
  }
}
