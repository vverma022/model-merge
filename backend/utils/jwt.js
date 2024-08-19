import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const { sign, verify } = jwt;
dotenv.config();

const secret = process.env.JWT_SECRET || 'your-secret-key'; // Make sure to set this in your .env file

export const generateToken = (user) => {
  return sign({ id: user.id, email: user.email }, secret, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  return verify(token, secret);
};