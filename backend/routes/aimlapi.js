import { OpenAI } from "openai";
import express from "express";
import { configDotenv } from "dotenv";
configDotenv();

const router = express.Router();

const configuration = new OpenAI({
  apiKey: process.env.AI_ML_API_KEY,
  basePath: "https://api.aimlapi.com/",
});

const model = new OpenAI(configuration);

router.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await model.completions.create({
      model: "lmsys/vicuna-13b-v1.5",
      prompt: userMessage,
    });

    const aiResponse = response.choices[0].text || "";
    res.json({ response: aiResponse });
  } catch (error) {
    console.error("Error fetching completion:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request" });
  }
});

export default router;
