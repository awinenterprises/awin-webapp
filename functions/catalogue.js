import { products } from "./_shared/products.js";
import { buildCareKits, kitDefinitions } from "./_shared/kits.js";

function escapeHtml(value) {
  return value.replace(/[&<>]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;"
  }[character]));
}

export function onRequestGet() {
  const kits = buildCareKits(products, kitDefinitions);
  const items = [...products, ...kits].sort((first, second) => first.name.localeCompare(second.name, "en-IN"));
  const links = items.map((item) =>
    `<li><a href="/products/${encodeURIComponent(item.slug)}">${escapeHtml(item.name)}</a> · ${escapeHtml(item.pack)}</li>`
  ).join("\n");

  return new Response(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Product Catalogue | Awin Enterprises</title>
<meta name="description" content="Browse every product and care kit from Awin Enterprises and open individual pages for pack sizes, prices and ordering details.">
<link rel="canonical" href="https://awinenterprises.in/catalogue">
<style>
body{font:1rem/1.65 system-ui,sans-serif;color:#17211b;max-width:72rem;margin:auto;padding:1.5rem}
a{color:#14532d}ul{columns:2;column-gap:3rem}li{break-inside:avoid;margin-bottom:.3rem}
@media(max-width:680px){ul{columns:1}}
</style>
</head>
<body>
<header><a href="/">Awin Enterprises storefront</a></header>
<main>
<h1>Product catalogue</h1>
<ul>
${links}
</ul>
</main>
</body>
</html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
