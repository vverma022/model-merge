import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import groq from './routes/groq.js';
import openai from './routes/openai.js';
import cohere from './routes/cohere.js';

configDotenv();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
 app.use('/api', groq);
 app.use('/api2', openai);
 app.use('/api4', cohere);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});