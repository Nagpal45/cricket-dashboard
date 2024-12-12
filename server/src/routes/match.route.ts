import {Router} from "express";
import Match from "../models/Match";
import Team from "../models/Team";
import Player from "../models/Player";

const router = Router();

router.get("/", async (req, res) => {
    const latestMatch = await Match.find().sort({ createdAt: -1 }).limit(1);
    const id = latestMatch[0]._id;
    const teamA = await Team.findById(latestMatch[0].teamA);
    const teamB = await Team.findById(latestMatch[0].teamB);
    const inningBowlersIds = latestMatch[0].inningBowlers.slice(-2);
    const inningBatsmanIds = latestMatch[0].inningBatsman.slice(-2);
    const inningBowlers = await Player.find({ _id: { $in: inningBowlersIds } });
    const inningBatsman = await Player.find({ _id: { $in: inningBatsmanIds } });
    const ballbyball = latestMatch[0].ballbyball.reverse();
    const runs = ballbyball.map((ball) => ball.runs);
    const teamAPlayers = await Player.find({ team: teamA?._id });
    const teamBPlayers = await Player.find({ team: teamB?._id });
    res.json({id, teamA, teamB, inningBowlers, inningBatsman, ballbyball, runs, teamAPlayers, teamBPlayers });
});

router.put("/inningBowlers", async (req, res) => {
    const { bowlerId, matchId } = req.body;
    const match = await Match.findById(matchId);
    if(match){
        match.inningBowlers.push(bowlerId);
        await match.save();
        res.json({ message: "Bowler added" });
    } else {
        res.status(404).json({ message: "Match not found" });
    }
}
);

router.put("/inningBatsman", async (req, res) => {
    const { batsmanId, matchId } = req.body;
    const match = await Match.findById(matchId);
    if(match){
        match.inningBatsman.push(batsmanId);
        await match.save();
        res.json({ message: "Batsman added" });
    } else {
        res.status(404).json({ message: "Match not found" });
    }
}
);

router.put("/updateScore", async (req, res) => {
    const { matchId, run, batsmanId, bowlerId, teamId } = req.body;
    const match = await Match.findById(matchId);
    const batsman = await Player.findById(batsmanId);
    const bowler = await Player.findById(bowlerId);
    const batsmanName = batsman?.name;
    const bowlerName = bowler?.name;
    const team = await Team.findById(teamId);
    if(match){
        match.ballbyball.push({ ball: match.ballbyball.length + 1, runs: run, description: `${bowlerName} to ${batsmanName}: ${run} ${run === 1 ? "run" : "runs"}` });

        if(team){
            team.totalScore += run;
            if(team.overs % 1 === 0.6){
                team.overs = team.overs + 0.4;
            }
            team.overs = team.overs + 0.1;
            await team.save();
        }

        if(batsman){
            batsman.runs += run;
            batsman.ballsFaced += 1;
            await batsman.save();
        }

        if(bowler){
            bowler.runsConceded += run;
            if(bowler.oversBowled % 1 === 0.6){
                bowler.oversBowled = bowler.oversBowled + 0.4;
            }
            bowler.oversBowled = bowler.oversBowled + 0.1;
            await bowler.save();
        }

        if(run % 2 !== 0){
            const temp = match.inningBatsman[0];
            match.inningBatsman[0] = match.inningBatsman[1];
            match.inningBatsman[1] = temp;
        }

        await match.save();
        res.json({ message: "Score updated" });
    } else {
        res.status(404).json({ message: "Match not found" });
    }
}
);
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