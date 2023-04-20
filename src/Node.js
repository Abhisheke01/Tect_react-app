const express = require('express');
const app = express();

app.get('/api/listing', (req, res) => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
  ];
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
