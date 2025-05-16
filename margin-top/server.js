const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 30001;

// Enhanced error handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

app.prepare().then(() => {
  createServer((req, res) => {
    try {
      // Parse the URL
      const parsedUrl = parse(req.url, true);
      
      // Enhanced request logging
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
      console.log('Query:', parsedUrl.query);
      console.log('Headers:', req.headers);
      
      // Handle the request
      handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling request:', err);
      console.error('Stack trace:', err.stack);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(port, (err) => {
    if (err) {
      console.error('Failed to start server:', err);
      process.exit(1);
    }
    console.log(`> Ready on http://localhost:${port}`);
    console.log(`> Environment: ${dev ? 'development' : 'production'}`);
    console.log(`> Press Ctrl+C to stop the server`);
  });
}); 