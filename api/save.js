import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    const data = req.body;

    if (!data || !data.savedBy) {
      return res.status(400).json({ error: 'Invalid data' });
    }

    await sql`
      INSERT INTO billing_data (id, data, saved_by, saved_at)
      VALUES (1, ${JSON.stringify(data)}, ${data.savedBy}, NOW())
      ON CONFLICT (id) DO UPDATE SET
        data = ${JSON.stringify(data)},
        saved_by = ${data.savedBy},
        saved_at = NOW()
    `;

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Save error:', err);
    return res.status(500).json({ error: 'Failed to save' });
  }
}
