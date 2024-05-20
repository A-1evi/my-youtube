const corsAnywhere = require("cors-anywhere");

const host = "0.0.0.0";
const port = 8080;

// List of allowed origins
const originWhitelist = [
  "http://localhost:3000"
  // Add other allowed origins here
];

corsAnywhere
  .createServer({
    originWhitelist: originWhitelist, // Only allow requests from these origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
    // Add any other configurations here
  })
  .listen(port, host, () => {
    console.log(`Running CORS Anywhere on ${host}:${port}`);
    console.log(`Allowed origins: ${originWhitelist.join(", ")}`);
  });
