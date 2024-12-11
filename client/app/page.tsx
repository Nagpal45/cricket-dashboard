import FeedPanel from "@/components/FeedPanel";
import ScoreCard from "@/components/ScoreCard";

export default function Home() {
  return (
    <>
    <div className="w-full h-[60px] bg-gray-800 flex items-center justify-between">
      <p className="text-white ml-10 text-xl">Cricket Score</p>
      <button className="text-red-500 mr-10">Logout</button>
    </div>
    <div className="flex flex-row w-full h-screen items-center justify-center gap-2 p-2">
      <FeedPanel/>
      <ScoreCard/>
    </div>
    </>
  );
}
