const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

var data = [{
  name: 'Mobile update8',
  id: '8',
  amount: '80000'
}];

app.get('/plan', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
