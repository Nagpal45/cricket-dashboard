import mongoose from "mongoose";
const { Schema } = mongoose;

const matchSchema = new mongoose.Schema({
  teamA: { type: Schema.Types.ObjectId, ref: "Team", required: true },
  teamB: { type: Schema.Types.ObjectId, ref: "Team", required: true },
  inningBowlers : { type: [Schema.Types.ObjectId], ref: "Player" , default: []},
  inningBatsman: { type: [Schema.Types.ObjectId], ref: "Player" , default: []},
  ballbyball : {
    type: [
      {
        ball: { type: Number, required: true },
        runs: { type: Number, required: true },
        description: { type: String, required: true },
      },
    ],
    default: [],
  }
}, { timestamps: true });


export default mongoose.model("Match", matchSchema);