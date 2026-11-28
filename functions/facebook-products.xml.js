import { products } from "./_shared/products.js";
import { buildCareKits, kitDefinitions } from "./_shared/kits.js";

const SITE = "https://awinenterprises.in";

function xml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;"
  }[character]));
}

export function onRequestGet() {
  const kits = buildCareKits(products, kitDefinitions).map((kit) => ({
    ...kit,
    description: `Includes one of each: ${kit.components.map((item) => `${item.name} (${item.pack})`).join(", ")}.`,
  }));
  const items = [...products, ...kits].map((product) => {
    const brand = product.brand ?? (
      product.slug === "tulsi-power" ? "Altos Ayurveda" :
      product.slug === "charcoal-face-wash" || product.name.startsWith("Zordan ") ? "Zordan" :
      "Altos"
    );
    const attributes = {
      id: `awin-${product.id}`,
      title: `${product.name} - ${product.pack}`,
      description: `${product.name}, ${product.pack}. ${product.description}`,
      link: `${SITE}/products/${product.slug}`,
      image_link: product.image.startsWith("/") ? `${SITE}${product.image}` : product.image,
      availability: (product.inStock ?? true) ? "in stock" : "out of stock",
      price: `${Number(product.price).toFixed(2)} INR`,
      condition: "new",
      product_type: product.category,
      ...(brand ? { brand } : {}),
      ...(product.gtin ? { gtin: product.gtin } : {}),
      ...(product.mpn ? { mpn: product.mpn } : {})
    };
    return "    <item>\n" + Object.entries(attributes)
      .map(([name, value]) => `      <g:${name}>${xml(value)}</g:${name}>`)
      .join("\n") + "\n    </item>";
  });

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Awin Enterprises Facebook product catalogue</title>
    <link>${SITE}/</link>
    <description>Current products, prices and availability from Awin Enterprises.</description>
${items.join("\n")}
  </channel>
</rss>\n`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=300"
    }
  });
}
