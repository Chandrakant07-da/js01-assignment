// Import the http module
const http = require('http');

// Create a server that sends "Hello World!" for the root URL
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

// Server listens on port 3000
const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
