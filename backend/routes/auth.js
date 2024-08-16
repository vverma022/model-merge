import bcrypt from 'bcryptjs';
import { verifyToken, generateToken } from '../middleware/authmiddleware';
import express from 'express';

const router = express.Router();


router.post('/register', async (req,res) => {
    try{
  const {email,name,password} = req.body;
  const hashpassword = await bcrypt.hash(password, 10);
  const newuser = {email, password: hashpassword, name};
  users.push(newuser);
  res.status(201).json({
    message: "Succesfullt Registered"
  })
}catch(error){
  res.status(500).json({
    message: "Error while registring user"
  })
}
})

router.post('login', async (req,res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email); // Replace with your database logic
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = generateToken(user);
    res.json({ token });
})