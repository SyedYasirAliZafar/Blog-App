import express from 'express'
import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'
import commentRouter from './routes/comment.route.js'
import { connectDB } from './config/connectDB.js'
import dotenv from "dotenv";

dotenv.config();

const app = express()

// MongoDB Connected
connectDB()

// Allowed Frontend Origins
const allowedOrigins = ["http://localhost:5173"]


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/users", userRouter)

app.use("/posts", postRouter)

app.use("/comments", commentRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
