import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

import tasksRoutes from './routes/tasks.js';

console.log('CWD:', process.cwd());
console.log('MongoDB URI:', process.env.MONGODB_URI);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', tasksRoutes);

app.get('/', (req, res) => {
  res.send('API running');
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message);
  });
