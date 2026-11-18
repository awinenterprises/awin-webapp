import { products } from "./_shared/products.js";

const SITE = "https://awinenterprises.in";

function xml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;"
  }[character]));
}

export function onRequestGet() {
  const items = products.map((product) => {
    const brand = product.brand ?? (
      product.slug === "tulsi-power" ? "Altos Ayurveda" :
      product.slug === "charcoal-face-wash" || product.name.startsWith("Zordan ") ? "Zordan" :
      undefined
    );
    const attributes = {
      id: `awin-${product.id}`,
      title: `${product.name} - ${product.pack}`,
      description: `${product.name}, ${product.pack}. ${product.description}`,
      link: `${SITE}/products/${product.slug}`,
      image_link: product.image,
      availability: (product.inStock ?? true) ? "in_stock" : "out_of_stock",
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
    <title>Awin Enterprises product catalogue</title>
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
