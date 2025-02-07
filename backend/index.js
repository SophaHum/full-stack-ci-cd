const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend is running' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
