const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Define your API routes
app.post('/api', (req, res) => {
  const { events } = req.body;
  console.log(events);
  // Process the events and perform necessary operations
  // ...

  // Send a response back
  res.status(200).json({ message: 'Events received' });
});

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
