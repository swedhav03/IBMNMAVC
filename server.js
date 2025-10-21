const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

// --- API to send data to frontend ---
app.get("/api/data", (req, res) => {
  const metrics = {
    months: ["Jan", "Feb", "Mar", "Apr", "May"],
    users: [120, 150, 200, 250, 300],
    sales: [50, 80, 120, 150, 200],
    views: [300, 400, 500, 600, 700],
  };
  res.json(metrics);
});

app.listen(PORT, () => console.log(✅ Server running at http://localhost:${PORT}));