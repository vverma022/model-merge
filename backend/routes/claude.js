import expresss from 'express';
import { configDotenv } from 'dotenv';
import Anthropic from '@anthropic-ai/sdk';
configDotenv();

const router = new expresss.Router();

const anthropic = new Anthropic({
    apiKey : process.env.CLAUDE_API_KEY
})

router.post('/chat', async (req,res) =>{
    try{
        const message = req.body.message;

        const response = await anthropic.messages.create({
            model: "claude-3-sonnet-20240229",
            max_tokens: 250,
            messages: [
                {
                  role: "user",
                  content: [
                    {
                      type: "text",
                      text: message
                    }
                  ]
                }
              ]
        });
        res.json(response.content[0].text);
    } catch(error){
       console.error(error);
         res.status(500).send('Server Error');
    }

});

export default router;
