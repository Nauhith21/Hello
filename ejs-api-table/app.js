const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Route that fetches data from a REST API
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;
    res.render('table', { users });
  } catch (error) {
    res.send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
