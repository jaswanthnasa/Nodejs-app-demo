const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); //
  res.write('<h1>Hello world. </h1>\n'); 
  res.write('<h2> This is a sample node js application depoyed in AWS EC2!!</h2>\n'); 
  res.end();
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
