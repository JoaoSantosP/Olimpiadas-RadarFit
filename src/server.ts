import express from 'express';
import dotenv from 'dotenv';
import rankingRouter from './api/routes/ranking.router';
dotenv.config()

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

app.use('/ranking', rankingRouter)
app.listen(port, () => {
  console.log(`server is running in port ${port}`)
});
