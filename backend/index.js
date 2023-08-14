import express from 'express'
import dotenv from 'dotenv'
import connectDb from"./config/dbconnect.js"
import cors from "cors"

dotenv.config()

connectDb()
const app = express();

const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

app.get("/", (req, res)=> {
  res.send('API is running...')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});