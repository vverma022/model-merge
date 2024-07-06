import { configDotenv } from "dotenv";
import Groq from "groq-sdk";
import express from "express";
configDotenv();

const router = express.Router();

const groq = new Groq({apiKey: process.env.LLAMA_API_KEY});

router.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
  
    if (!userMessage) {
      return res.status(400).json({ error: 'Message is required' });
    }
  
    try {
      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: userMessage,
          },
        ],
        model: "mixtral-8x7b-32768",
        max_tokens: 100,
      });
  
      const aiResponse = completion.choices[0]?.message?.content || "";
  
      res.json({ response: aiResponse });
    } catch (error) {
      console.error("Error fetching completion:", error);
      res.status(500).json({ error: 'An error occurred while processing the request' });
    }
  });

export default router;