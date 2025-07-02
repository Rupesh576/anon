const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve other static assets (if any)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the React admin build generated in frontend/admin
const adminPath = path.join(__dirname, '..', 'frontend', 'admin', 'build');
app.use('/admin', express.static(adminPath));
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(adminPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
