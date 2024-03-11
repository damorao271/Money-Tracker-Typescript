import express from 'express';
const app = express();

app.use(express.json()); // MIdleware to parse the request body

const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
