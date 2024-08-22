import express from 'express';
import { configDotenv } from 'dotenv';
import groq from './routes/groq.js';
import openai from './routes/openai.js';
import cohere from './routes/cohere.js';
import claude from './routes/claude.js';
import linkedinparser from './routes/linkedinparser.js';
import auth from './routes/auth.js';
import authmiddleware from './middleware/authmiddleware.js'
import cors from 'cors';
//import sdxl from './routes/monster.js'; //Issues with this route

configDotenv();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use('/api/parse',linkedinparser);
app.use('/auth', auth);

app.use(authmiddleware);

// Middleware


// Routes
 app.use('/api', groq);
 app.use('/api2', openai);
 app.use('/api4', cohere);
 app.use('/api5', claude);

 //app.use('/api/img',sdxl)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});