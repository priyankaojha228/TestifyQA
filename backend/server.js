const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB with proper error handling
mongoose
  .connect('mongodb+srv://priyankaojha228:Rashky228@cluster0.qffvx.mongodb.net/bugtracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit if the connection fails
  });

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/bugs', require('./routes/bugRoutes'));

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
