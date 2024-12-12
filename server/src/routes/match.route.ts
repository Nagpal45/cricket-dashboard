import {Router} from "express";
import Match from "../models/Match";
import Team from "../models/Team";
import Player from "../models/Player";

const router = Router();

router.get("/", async (req, res) => {
    const latestMatch = await Match.find().sort({ createdAt: -1 }).limit(1);
    const teamA = await Team.findById(latestMatch[0].teamA);
    const teamB = await Team.findById(latestMatch[0].teamB);
    const inningBowlersIds = latestMatch[0].inningBowlers.slice(-2);
    const inningBatsmanIds = latestMatch[0].inningBatsman.slice(-2);
    const inningBowlers = await Player.find({ _id: { $in: inningBowlersIds } });
    const inningBatsman = await Player.find({ _id: { $in: inningBatsmanIds } });
    const ballbyball = latestMatch[0].ballbyball;
    const runs = ballbyball.map((ball) => ball.runs);
    const teamAPlayers = await Player.find({ team: teamA?._id });
    const teamBPlayers = await Player.find({ team: teamB?._id });
    res.json({ teamA, teamB, inningBowlers, inningBatsman, ballbyball, runs, teamAPlayers, teamBPlayers });
});

router.post("/", async (req, res) => {
    const { teamA, teamB} = req.body;
    const match = new Match({
        teamA,
        teamB,
    });
    await match.save();
    res.status(201).json({ message: "Match created" });
    }
);

export default router;