import { products } from "../_shared/products.js";

const SITE = "https://awinenterprises.in";
const PHONE = "917828757646";

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

export async function onRequest({ params }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return new Response("Product not found", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  }

  const url = `${SITE}/products/${product.slug}`;
  const inStock = product.inStock ?? true;
  const stockLabel = inStock ? "In stock" : "Out of stock";
  const brand = product.brand ?? (
    product.slug === "tulsi-power" ? "Altos Ayurveda" :
    product.slug === "charcoal-face-wash" || product.name.startsWith("Zordan ") ? "Zordan" :
    undefined
  );
  const returnPolicy = {
    "@type": "MerchantReturnPolicy",
    applicableCountry: "IN",
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 2,
    itemCondition: "https://schema.org/DamagedCondition",
    merchantReturnLink: `${url}#returns`
  };
  const title = `Buy ${product.name} Online in India | Awin Enterprises`;
  const description = `View ${product.name} by Awin Enterprises. Pack: ${product.pack}. Check current price, availability and ordering details on WhatsApp.`;
  const message = `Hello Awin Enterprises, I want to enquire about ${product.name} (${product.pack}). Please confirm current price and availability.`;
  const whatsapp = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [product.image],
    description,
    category: product.category,
    ...(brand ? { brand: { "@type": "Brand", name: brand } } : {}),
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      price: String(product.price),
      availability: inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      shippingDetails: { "@type": "OfferShippingDetails", hasShippingService: { "@id": `${SITE}/#india-shipping` } },
      hasMerchantReturnPolicy: returnPolicy,
      seller: { "@type": "Organization", name: "Awin Enterprises", url: SITE }
    }
  }).replace(/</g, "\\u003c");

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<meta name="robots" content="index,follow">
<link rel="canonical" href="${url}">
<meta property="og:type" content="product">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${escapeHtml(product.image)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<meta name="twitter:image" content="${escapeHtml(product.image)}">
<script type="application/ld+json">${jsonLd}</script>
<style>
:root{font-family:Arial,Helvetica,sans-serif;color:#17211b;background:#f7faf6}*{box-sizing:border-box}body{margin:0;line-height:1.6}.top{background:#064e3b;color:#fff;text-align:center;padding:10px}.wrap{max-width:1050px;margin:auto;padding:22px}.brand{color:#064e3b;font-weight:800;text-decoration:none;font-size:20px}.back{float:right;color:#14532d;font-weight:700}.card{display:grid;grid-template-columns:1fr 1fr;gap:32px;background:#fff;border:1px solid #e2e9e1;border-radius:20px;padding:26px;margin-top:24px}.photo{background:#f1f6ed;border-radius:16px;display:grid;place-items:center;min-height:320px;padding:16px}.photo img{max-width:100%;max-height:390px;object-fit:contain}.tag{color:#166534;font-weight:700;text-transform:uppercase;font-size:12px;letter-spacing:.08em}h1{font-size:clamp(28px,5vw,42px);line-height:1.15;color:#173c29;margin:10px 0}.muted{color:#65736a}.price{font-size:30px;font-weight:800;color:#064e3b}.mrp{text-decoration:line-through;color:#758078;font-size:16px;margin-left:8px}.btn{display:inline-block;background:#15803d;color:white;text-decoration:none;padding:13px 18px;border-radius:10px;font-weight:800;margin:8px 8px 0 0}.btn.alt{background:white;border:1px solid #b9c9bb;color:#064e3b}.note{font-size:13px;color:#65736a;background:#f1f6ed;padding:14px;border-radius:10px;margin-top:20px}footer{text-align:center;padding:28px;color:#65736a;font-size:14px}@media(max-width:700px){.card{grid-template-columns:1fr;padding:16px;gap:18px}.photo{min-height:240px}.wrap{padding:16px}}
.checkout{margin-top:24px;background:white;border:1px solid #e2e9e1;border-radius:20px;padding:clamp(16px,4vw,26px)}.checkout form{display:grid;gap:12px;max-width:420px}.checkout label{display:grid;gap:4px;font-weight:700}.checkout input{width:100%;padding:10px;border:1px solid #aabbb0;border-radius:8px;font:inherit}.checkout button{font:inherit;font-weight:800;cursor:pointer;border:0;justify-self:start}.checkout h2{margin-top:0}.checkout output{font-weight:800}.details{margin:24px 0}.details summary{cursor:pointer;font-weight:700}.product-meta{display:flex;gap:12px;flex-wrap:wrap}.stock{color:#166534}
</style>
</head>
<body>
<div class="top">Awin Enterprises · Online product enquiries and orders</div>
<div class="wrap">
<header><a class="brand" href="/">Awin Enterprises</a><a class="back" href="/">← Browse catalogue</a></header>
<main class="card">
<div class="photo"><img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="eager"></div>
<div>
<div class="tag">${escapeHtml(product.category)}</div>
<h1>${escapeHtml(product.name)}</h1>
<p class="muted">Pack size: ${escapeHtml(product.pack)}</p>
<div class="price">₹${product.price.toLocaleString("en-IN")} <span class="mrp">MRP ₹${product.mrp.toLocaleString("en-IN")}</span></div>
<p class="product-meta"><strong class="stock">${stockLabel}</strong>${brand ? `<span>Brand: ${escapeHtml(brand)}</span>` : ""}</p>
${inStock ? '<a class="btn" href="#checkout">Buy Now</a>' : ""}
<a class="btn alt" href="${whatsapp}" rel="noopener noreferrer">Ask on WhatsApp</a>
<div class="note">Please check the product packaging for ingredients, directions for use, warnings and other product-specific information. Product details and prices may change; confirm before ordering.</div>
</div>
</main>
${inStock ? `
<section class="checkout" id="checkout" aria-labelledby="checkout-title">
<h2 id="checkout-title">Checkout</h2>
<p>${escapeHtml(product.name)} · ${escapeHtml(product.pack)} · ₹${product.price.toLocaleString("en-IN")} each</p>
<form id="order-form" data-product="${escapeHtml(product.name)}" data-pack="${escapeHtml(product.pack)}" data-price="${product.price}" data-whatsapp="${PHONE}">
<label>Quantity <input name="quantity" type="number" min="1" max="99" value="1" required></label>
<label>Delivery pincode <input name="pincode" type="text" inputmode="numeric" autocomplete="postal-code" maxlength="6" pattern="[1-9][0-9]{5}" title="Enter a six-digit Indian pincode" required></label>
<p>Product subtotal <output id="order-subtotal" aria-live="polite">₹${product.price.toLocaleString("en-IN")}</output></p>
<p>Delivery <output id="order-shipping" aria-live="polite">${product.price > 1000 ? "Free" : "₹99"}</output></p>
<p>Total <output id="order-total" aria-live="polite">₹${(product.price + (product.price > 1000 ? 0 : 99)).toLocaleString("en-IN")}</output></p>
<p class="muted">Delivery across India costs ₹99 on orders up to and including ₹1,000, and is free on orders above ₹1,000.</p>
<button class="btn" type="submit">Send Order on WhatsApp</button>
</form>
<noscript><p><a href="${whatsapp}">Order on WhatsApp</a></p></noscript>
</section>
` : ""}
<details class="details">
<summary>Shipping in India</summary>
<p>Orders dispatch within 1–2 working days after payment confirmation. Delivery typically takes 3–7 working days, depending on the pincode. Delivery across India costs ₹99 on orders up to and including ₹1,000, and is free on orders above ₹1,000.</p>
</details>
<section class="details" id="returns" aria-labelledby="returns-title">
<h2 id="returns-title">Returns &amp; refunds</h2>
<p>Contact us on WhatsApp within 48 hours of delivery with your order number and clear photos or an unboxing video if your item is damaged, leaking, defective, expired, or incorrect. Eligible orders qualify for a replacement or refund. Returns on opened or used products are excluded under our policy. Approved refunds go back to the original payment method within 5–7 working days.</p>
</section>
</div>
<footer>© Awin Enterprises · <a href="https://awinenterprises.in/">awinenterprises.in</a></footer>
${inStock ? `<script>
  const form = document.getElementById("order-form");
  const quantity = form.elements.quantity;
  const subtotal = document.getElementById("order-subtotal");
  const formatPrice = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
  const shipping = document.getElementById("order-shipping");
  const total = document.getElementById("order-total");
  const productSubtotal = () => Number(form.dataset.price) * quantity.valueAsNumber;
  const deliveryCharge = (amount) => amount > 1000 ? 0 : 99;

  quantity.addEventListener("input", () => {
    const amount = productSubtotal();
    const charge = deliveryCharge(amount);
    subtotal.value = quantity.validity.valid ? formatPrice.format(amount) : "—";
    shipping.value = quantity.validity.valid ? (charge ? formatPrice.format(charge) : "Free") : "—";
    total.value = quantity.validity.valid ? formatPrice.format(amount + charge) : "—";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = productSubtotal();
    const charge = deliveryCharge(amount);
    const message = [
      "Hello Awin Enterprises, I would like to place an order.",
      "Product: " + form.dataset.product + " (" + form.dataset.pack + ")",
      "Quantity: " + quantity.value,
      "Product subtotal: " + formatPrice.format(amount),
      "Delivery: " + (charge ? formatPrice.format(charge) : "Free"),
      "Total: " + formatPrice.format(amount + charge),
      "Delivery pincode: " + form.elements.pincode.value,
      "Please confirm my order and share payment details."
    ].join("\\n");
    window.location.assign("https://wa.me/" + form.dataset.whatsapp + "?text=" + encodeURIComponent(message));
  });
</script>` : ""}
</body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300"
    }
  });
}
