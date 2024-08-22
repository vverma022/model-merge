import axios from 'axios';
import express from 'express';
import { configDotenv } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import ExcelJS from 'exceljs';

configDotenv();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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
            const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('LinkedIn Profiles');

        // Define the columns for the worksheet
        worksheet.columns = [
            { header: 'First Name', key: 'firstName', width: 20 },
            { header: 'Last Name', key: 'lastName', width: 20 },
            { header: 'Full Name', key: 'fullName', width: 30 },
            { header: 'Headline', key: 'headline', width: 40 },
            { header: 'Connections', key: 'connections', width: 15 },
            { header: 'Followers', key: 'followers', width: 15 },
            { header: 'Location', key: 'location', width: 30 },
            { header: 'Experience Title', key: 'experienceTitle', width: 40 },
            { header: 'Experience Company', key: 'experienceCompany', width: 40 },
            { header: 'Education', key: 'education', width: 40 },
            { header: 'Skills', key: 'skills', width: 50 }
        ];
         
        const linkedinData = response.data;
        const profiles = linkedinData.profiles || linkedinData.data;

if (Array.isArray(profiles)) {
    profiles.forEach(profile => {
        const experiences = profile.data.experiences.map(exp => `${exp.title} at ${exp.subtitle}`).join('; ');
        const education = profile.data.educations.map(edu => `${edu.title}`).join('; ');
        const skills = profile.data.skills.map(skill => `${skill.title}`).join(', ');

        worksheet.addRow({
            name: profile.data.name,
            headline: profile.data.headline,
            location: profile.data.location,
            experiences,
            education,
            skills,
        });
    });

    const filePath = path.join(__dirname, 'LinkedInData.xlsx');
    await workbook.xlsx.writeFile(filePath);

    // Send the Excel file to the frontend
    res.download(filePath, 'LinkedInData.xlsx', (err) => {
        if (err) {
            console.error('Error downloading file:', err);
            res.status(500).json({ message: 'Failed to download the file' });
        }

        // Delete the file after sending it to the user
        fs.unlinkSync(filePath);
    });
} else {
    res.status(400).json({ message: 'Invalid data format received' });
}
   } catch(error){
    console.log(error);
    res.status(500).json({
        message: 'Failed to fetch data from profiles'
    });
   }
});

export default router;