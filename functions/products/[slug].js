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
    ...(product.slug === "tulsi-power" ? { brand: { "@type": "Brand", name: "Altos Ayurveda" } } : {}),
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      price: String(product.price),
      availability: inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
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
<p><strong>${stockLabel}</strong></p>
<p class="muted">Listed by Awin Enterprises. Contact us to confirm delivery details.</p>
<a class="btn" href="${whatsapp}" rel="noopener noreferrer">Enquire / Order on WhatsApp</a>
<a class="btn alt" href="/">View all products</a>
<div class="note">Please check the product packaging for ingredients, directions for use, warnings and other product-specific information. Product details and prices may change; confirm before ordering.</div>
</div>
</main>
</div>
<footer>© Awin Enterprises · <a href="https://awinenterprises.in/">awinenterprises.in</a></footer>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300"
    }
  });
}
