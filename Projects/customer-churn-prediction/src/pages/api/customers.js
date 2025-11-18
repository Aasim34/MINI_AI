// Retrieve the list of customers
// Endpoint: GET /api/customers

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
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: "Method not allowed" });
  }
  
  try {
  // Fetch data from database
  const data = [
    { id: 1, title: "Item 1", description: "First item", createdAt: new Date() },
    { id: 2, title: "Item 2", description: "Second item", createdAt: new Date() },
    { id: 3, title: "Item 3", description: "Third item", createdAt: new Date() },
  ];
  
  res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
}
