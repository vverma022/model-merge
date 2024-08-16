import { sign, verify } from 'jsonwebtoken';


const secret = process.env.JWT_SECRET || 'your-secret-key'; // Make sure to set this in your .env file

const generateToken = (user) => {
  return sign({ id: user.id, email: user.email }, secret, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  return verify(token, secret);
};

module.exports = {generateToken, verifyToken};
