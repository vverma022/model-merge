import express from 'express';
import { configDotenv } from 'dotenv';
import axios from 'axios';
configDotenv();

const router = express.Router();
const secret = process.env.RAPID_API_KEY;

router.post('/chat', async (req, res) => {
    const { message } = req.body;
  
    const options = {
      method: 'POST',
      url: 'https://open-ai21.p.rapidapi.com/chatgpt',
      headers: {
        'x-rapidapi-key': secret,
        'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        messages: [
          {
            role: 'user',
            content: message
          }
        ],
        web_access: false
      }
    };
  
    try {
      const response = await axios.request(options);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while processing your request' });
    }
  });
  











export default router;