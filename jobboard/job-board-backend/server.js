const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');


// Middleware
app.use(express.json());
app.use('/auth', require('./routes/auth'));
app.use('/jobs', require('./routes/jobs'));
app.use('/applications', require('./routes/applications'));
app.use(cors({
  origin: 'http://localhost:3000', // URL of the React frontend
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/jobboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Example route
app.get('/', (req, res) => {
  res.send('Job Board API');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
