import { Router } from 'express';
import Player from '../models/Player';

const router = Router();

router.get('/', (req, res) => {
    const players = Player.find();
    res.status(200).json(players);
});

router.post('/', async (req, res) => {
    const { name, team, role } = req.body;
    const player = new Player({ name, team, role });
    await player.save();
    res.status(201).json({ message: 'Player created' });
});

export default router;