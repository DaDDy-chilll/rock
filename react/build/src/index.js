"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const server = (0, http_1.createServer)((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    const today = new Date();
    const content = `
    <h1>Hello, world!</h1>
    <p>Today's date is ${today.toISOString()}</p>
  `;
    res.end(content);
});
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
