const sourceImages = new Map([
  ["rose.jpg", "https://shop.altosindia.net/storagecache/product_image/234946580-7fc6b102-a7ce-4d26-877d-3b96e5e927c9.jpeg"],
  ["gold.jpg", "https://altosindia.net/public/product/v1-face-care/gold-skin-toner.jpg"],
]);

export async function onRequestGet({ params }) {
  const source = sourceImages.get(params.variant);
  if (!source) return new Response("Image not found", { status: 404 });

  try {
    const upstream = await fetch(source, { cf: { cacheEverything: true, cacheTtlByStatus: { "200-299": 86400, "300-599": 0 } } });
    const contentType = upstream.headers.get("Content-Type");
    if (!upstream.ok || !contentType?.startsWith("image/")) {
      return new Response("Image temporarily unavailable", { status: 502 });
    }
    return new Response(upstream.body, {
      headers: { "Content-Type": contentType, "Cache-Control": "public, max-age=86400" },
    });
  } catch {
    return new Response("Image temporarily unavailable", { status: 502 });
  }
}
