import express from 'express';
import { configDotenv } from 'dotenv';
import { CohereClient } from 'cohere-ai';


configDotenv();

const router = express.Router();

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

router.post('/chat', async (req,res) => {
    const userMessage = req.body.message;

    if(!userMessage){
        return res.status(400).json({error: 'Message is required'});
    }
    try{
        const response = await cohere.chat({
            message: userMessage,
        });

        const aiResponse =  response.text || "";

        res.json({response: aiResponse});
    } catch(error){
        console.error("Error fetching completion:", error);
        res.status(500).json({error: 'An error occurred while processing the request'});
    }
});

export default router;

