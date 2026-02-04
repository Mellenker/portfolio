import { neon } from "@neondatabase/serverless";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

export async function handler(event) {
  // Handle preflight request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  const sql = neon(process.env.DATABASE_URL);

  try {
    const rows = await sql`
      SELECT
        p.*,
        COALESCE(ts.tech_stack, '[]'::json) AS tech_stack
      FROM projects p
      LEFT JOIN (
        SELECT
          pt.project_id,
          JSON_AGG(t.name ORDER BY t.name) AS tech_stack
        FROM projects_tech pt
        JOIN tech t ON pt.tech_name = t.name
        GROUP BY pt.project_id
      ) ts ON p.id = ts.project_id
      ORDER BY p.created_at DESC;
    `;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(rows),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
