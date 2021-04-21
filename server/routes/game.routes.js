import express from 'express';
import Game from '../models/game.models.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const getGames = await Game.find();
    res.status(200).json(getGames);
});

router.post('/create', async (req, res) => {
    const game = req.body;
    const savedGame = new Game(game);
    
    await savedGame.save()
    .then( data => {
        res.status(201).json(data);
    })
    .catch( error => {
        res.status(401).json(error);
    });

});

export default router;