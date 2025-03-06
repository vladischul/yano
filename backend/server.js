const express = require('express');
const path = require('path');
const app = express();

const PORT = 3002;

// Serve static files
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
