import express from 'express';
import configdotenv, { configDotenv } from 'dotenv';
import monsterApi from '@api/monster-api';
configDotenv();
const router = express.Router();

monsterApi.postGenerateSdxlBase()
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));


router.post('/generate', async (req,res) => {

    
});