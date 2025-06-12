const http = require('http');

// ✅ Set default port
const port = process.env.PORT || 3000;

// ✅ Create server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, welcome to Node.js Crash Course!');
});

// ✅ Start server
server.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});