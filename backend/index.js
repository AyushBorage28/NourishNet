import express from 'express'
import dotenv from 'dotenv'
import connectDb from"./config/dbconnect.js"
import cors from "cors"
import userRoutes from "./routes/authRoute.js"
import schedule from "node-schedule"

dotenv.config()

connectDb()
const app = express();

const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.use('/api/users', userRoutes)

// make api request to '/' every 5 minutes to keep this app awake
schedule.scheduleJob('*/5 * * * *', function(){
  fetch('https://nourishnet-backend-k736.onrender.com')
  .then(res => res.json({message: "pinged"}))
  .then(json => console.log(json))
  .catch(err => console.log(err))
})

app.get("/", (req, res)=> {
  res.send('API is running...')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})