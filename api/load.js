import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);

    const rows = await sql`SELECT data FROM billing_data WHERE id = 1`;

    if (rows.length === 0) {
      return res.status(200).json({ data: null });
    }

    return res.status(200).json({ data: rows[0].data });
  } catch (err) {
    console.error('Load error:', err);
    return res.status(500).json({ error: 'Failed to load' });
  }
}
