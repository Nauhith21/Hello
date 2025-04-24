import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'fallbackSecretKey';

// Middleware to parse JSON bodies
app.use(express.json());

// Dummy users data
const users = [
  { id: 1, username: 'user1', password: 'password123' },
  { id: 2, username: 'user2', password: 'mypassword' }
];

// Login route to issue JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  console.log(req.body);  // Log the requst body for debugging
  
  // Destructure the request body
  

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide both username and password.' });
  }

  // Find the user in the dummy data
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  // Send the token as response
  res.json({ message: 'Login successful', token });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
