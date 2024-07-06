import express from 'express';
import {GoogleGenerativeAI} from '@google/generative-ai';
import { configDotenv } from 'dotenv';

configDotenv();

const router = express.Router();
const googleAI = new GoogleGenerativeAI({apiKey: process.env.GEMINI_API_KEY});
const geminiConfig = {
  maxOutputTokens: 100,
  temperature: 0.7,
};

const geminiModel = googleAI.getGenerativeModel({model:"gemini-pro",geminiConfig});

router.post('/chat',async(req,res)=>{
  const userMessage = req.body.message;

  if(!userMessage){
    return res.status(400).json({error: 'Message is required'});
  }

  try{
    const result = await geminiModel.generateContent(userMessage);
    const response = result.response;

    res.json({response});
  } catch (error){
    console.error("Error fetching completion:", error);
    res.status(500).json({error: 'An error occurred while processing the request'});
  }
});

export default router;













// export default router;