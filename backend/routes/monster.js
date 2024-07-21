import express from 'express';
import  { configDotenv } from 'dotenv';
import MonsterApiClient from "monsterapi";
configDotenv();


const router = express.Router();

const client =  new  MonsterApiClient(process.env.MONSTER_API_KEY);

router.post('/generate', async (req, res) => {
  const { style, prompt } = req.body;

  const input = {
    prompt: prompt,
    steps: 50,
    aspect_ratio: 'square',
    enhance: true,
    optimize: true,
    style: style
  };

  try {
    const response = await client.generate('sdxl', input);
    res.json({
      success: true,
      data: response
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate image',
      error: error.message
    });
  }
});

export default router;