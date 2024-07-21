import express from 'express';
import configdotenv, { configDotenv } from 'dotenv';
import monsterApi from '@api/monster-api';
configDotenv();


const router = express.Router();

const client = new monsterApi(process.env.MONSTER_API_KEY);

router.post('/generate', async (req,res) => {
  const { model, input } = req.body;
  client.generate(model, input)
  .then((response) => {
    // Handle the response from the API
    console.log('Generated content:', response);
  })
  .catch((error) => {
    // Handle API errors
    console.error('Error:', error);
  });
});