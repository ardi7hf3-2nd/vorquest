export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  const url = process.env.SUPABASE_URL || '';
  const key = process.env.SUPABASE_KEY || '';

  if (!url || !key) {
    // Jangan expose error detail ke client
    res.status(500).end('// ENV tidak terkonfigurasi');
    return;
  }

  res.end(`window.SUPABASE_URL = '${url}'; window.SUPABASE_KEY = '${key}';`);
}
