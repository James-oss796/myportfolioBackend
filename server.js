// import env 
require('dotenv').config();

// require('dotenv').config();: This line imports and configures the dotenv module, which loads environment variables from a .env file into process.env. This is commonly used to store sensitive information like database credentials or configuration values.


// const app = require('./index');: This line imports the Express application from the index.js file. This likely contains the configuration and setup for your Express application, including routes and middleware.
const app = require('./landingPage.js');

// const http = require('http');: This line imports the built-in http module, which provides functionality for creating HTTP servers in Node.js.
const http = require('http');




// app.listen(5000, () => console.log("server running on prt 5000"));

const server = http.createServer(app);

// server.l
server.listen(5000, () => console.log("server running on prt 5000"));

