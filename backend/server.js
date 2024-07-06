import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import groq from './routes/groq.js';
import gemini from './routes/gemini.js';

configDotenv();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
 app.use('/api', groq);
 app.use('/api2', gemini);
// app.use('/api3', api3);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});