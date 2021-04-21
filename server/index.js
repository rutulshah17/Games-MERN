import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import gameRoutes from './routes/game.routes.js';

const app = express();

//below is to get credentials from .env file
dotenv.config();

app.use(express.json());

app.use(cors());

app.use('/app', gameRoutes);

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database connected') );

app.listen( 4000, () => {
    console.log('App Running');
});