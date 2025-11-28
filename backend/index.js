import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import { connectDB } from './config/connectDB.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); 

// Allowed Frontend Origins
const allowedOrigins = ["http://localhost:5173"];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// MongoDB Connected
connectDB();

// Test Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// Error handeler

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined
  });
});


// Server Listen
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
