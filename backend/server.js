import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import groq from './routes/groq.js';
import gemini from './routes/gemini.js';
import aimlapi from './routes/aimlapi.js';
import cohere from './routes/cohere.js';

configDotenv();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
 app.use('/api', groq);
 app.use('/api2', gemini);
 app.use('/api3', aimlapi);
 app.use('/api4', cohere);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});