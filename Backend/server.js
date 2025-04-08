const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
// app.use(cors());

app.use(cors({
  origin: [
    process.env.FRONTEND_URL, // Your frontend URL
    process.env.DEV_BASE_URL, // Your frontend development URL
  ], // allow Vite frontend
  credentials: true               // if you're sending cookies or auth headers (like JWT)
}));


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected locally...'))
.catch((err) => console.error('❌ MongoDB connection failed:', err));

// Routes
const passwordRoutes = require('./routes/passwordRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/passwords', passwordRoutes);
app.use('/api/auth', authRoutes);
app.get("/", (req, res) => {
  res.send("Yes, Server is up and running!🥳");
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
