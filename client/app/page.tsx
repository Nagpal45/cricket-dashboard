import FeedPanel from "@/components/FeedPanel";
import Navbar from "@/components/Navbar";
import ScoreCard from "@/components/ScoreCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row w-full h-screen items-center justify-center gap-2 p-2">
        <FeedPanel />
        <ScoreCard />
      </div>
    </>
  );
}
