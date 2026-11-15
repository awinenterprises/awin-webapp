export async function onRequest(context) {
  const { request, env } = context;

  // 1. Verify Authorization Header
  const authHeader = request.headers.get("Authorization");
  const expectedToken = `Bearer ${env.AWIN_API_KEY}`;
  
  if (!authHeader || authHeader !== expectedToken) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { 
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    // 2. Fetch sales summary from D1 Database
    const { results: totalOrders } = await env.DB.prepare("SELECT COUNT(*) as count FROM orders").all();
    const { results: totalRevenue } = await env.DB.prepare("SELECT SUM(total_amount) as revenue FROM orders").all();
    const { results: bestsellers } = await env.DB.prepare("SELECT product_name, SUM(quantity) as total_sold FROM orders GROUP BY product_name ORDER BY total_sold DESC LIMIT 5").all();
    const { results: recentOrders } = await env.DB.prepare("SELECT order_id, product_name, total_amount, status, created_at FROM orders ORDER BY created_at DESC LIMIT 10").all();

    const data = {
      summary: {
        total_orders: totalOrders[0]?.count || 0,
        total_revenue: totalRevenue[0]?.revenue || 0
      },
      bestsellers,
      recent_orders: recentOrders
    };

    return new Response(JSON.stringify(data, null, 2), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
