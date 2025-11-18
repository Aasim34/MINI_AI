// Create a new walk
// Endpoint: POST /api/walks

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }
  
  try {
  // Validate request body
  const { title, description } = req.body;
  
  if (!title || !description) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  
  // Create new item
  const newItem = {
    id: Math.random(),
    title,
    description,
    createdAt: new Date(),
  };
  
  res.status(201).json({ success: true, data: newItem });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
}
