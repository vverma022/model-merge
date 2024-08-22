import axios from 'axios';
import express from 'express';
import { configDotenv } from 'dotenv';

configDotenv();


const router = express.Router();
const APIKEY = process.env.API_KEY;

router.post('/linkedin', async (req,res) => {
   try{
    const response = await axios.post('https://linkedin-bulk-data-scraper.p.rapidapi.com/profiles',
            {
                links: req.body.links
            },
            {
                headers: {
                    'x-rapidapi-key': APIKEY, 
                    'x-rapidapi-host': 'linkedin-bulk-data-scraper.p.rapidapi.com',
                    'Content-Type': 'application/json',
                    'x-rapidapi-user': 'usama'
                }
            });
     console.log(response.data);
     res.status(200).json({
        data: response.data,
       message: 'Successfully fetched data from profiles'
     });
   } catch(error){
    console.log(error);
    res.status(500).json({
        message: 'Failed to fetch data from profiles'
    });
   }
});

export default router;