export interface Team {
    name: string;
    totalScore: number;
    wickets: number;
    overs: number;
 }
 
 export interface Player {
    name: string;
    team: string;
    role: string;
    runs: number;
    ballsFaced: number;
    wicketsTaken: number;
    oversBowled: number;
    runsConceded: number;
 }
 
 export interface BallByBall {
    ball: number;
    runs: number;
    description: string;
 }
 
 export interface Match {
    teamA: Team;
    teamB: Team;
    inningBowlers: Player[];
    inningBatsman: Player[];
    ballbyball: BallByBall[];
    runs: number[];
    teamAPlayers: Player[];
    teamBPlayers: Player[];
 }
 