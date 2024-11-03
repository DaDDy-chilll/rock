import { createServer } from "http";

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const today = new Date();
  const content = `
  <h1>Client Side</h1>
  <p>
  <script>
  const today = new Date();
  document.write(today.toISOString());
  </script>
  </p>
  `;
  res.end(content);
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

