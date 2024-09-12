const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.jsn());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const mobiles=[
  'Nokia',
  'Realme',
  'Redme'
];

app.get('/plan', (req, res) => {
  res.json('mobiles');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
