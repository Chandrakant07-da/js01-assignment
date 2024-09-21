const express = require('express');
const cors = require("cors")
const app = express();
app.use(
  express.json(),
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// Sample list of users
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Sam Brown', email: 'sam@example.com' }
];

// Route to get the list of users
app.get('/users', (req, res) => {
  res.json(users);
});

// Start the server on port 3000
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
