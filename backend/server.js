import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
// app.use('/api1', api1);
// app.use('/api2', api2);
// app.use('/api3', api3);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});