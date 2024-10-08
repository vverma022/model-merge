import bcrypt from 'bcryptjs';
import  {generateToken}  from '../utils/jwt.js';
import express from 'express';
import { PrismaClient } from '@prisma/client'


const router = express.Router();
const prisma = new PrismaClient();

router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
    console.log(req.body);
  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }


  const hashedPassword = await bcrypt.hash(password, 10);

  
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name
    }
  });

  res.status(201).json({ message: 'User registered successfully' });
});


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    
    const token = generateToken(user);

    
    res.json({
      message: 'Login successful',
      authtoken: token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


export default router;