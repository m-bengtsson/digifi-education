const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route for stock statuses
server.get('/stock-statuses', (req, res) => {
  const stockStatuses = [
    {
      status: 'in_stock',
      label: 'I lager',
      color: '#10B981' // green
    },
    // Low Stock is 10-20
    {
      status: 'low_stock',
      label: 'Lågt lager',
      color: '#F59E0B' // amber/orange
    },
    {
      status: 'out_of_stock',
      label: 'Ej i lager',
      color: '#EF4444' // red
    }
  ];
  
  res.json(stockStatuses);
});

// Custom route for product search
server.get('/products/search', (req, res) => {
  const db = router.db;
  const query = req.query.q || '';
  
  if (!query || query.trim() === '') {
    return res.status(400).json({ error: 'Search query parameter "q" is required' });
  }
  
  const products = db.get('products').value();
  
  // Case-insensitive search by product name
  const searchTerm = query.toLowerCase().trim();
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm)
  );
  
  res.json(filteredProducts);
});

// Use default router
server.use(router);

const PORT = process.env.PORT || 3050;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
  console.log(`Stock statuses endpoint: http://localhost:${PORT}/stock-statuses`);
  console.log(`Product search endpoint: http://localhost:${PORT}/products/search?q=searchterm`);
});
