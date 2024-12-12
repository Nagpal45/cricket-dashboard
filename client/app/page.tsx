"use client"
import FeedPanel from "@/components/FeedPanel";
import Navbar from "@/components/Navbar";
import ScoreCard from "@/components/ScoreCard";
import apiRequest from "@/lib/apiRequest";
import { useEffect, useState } from "react";
import { Match } from "./types";

export default function Home() {
  const [match, setMatch] = useState<Match>();
  const [change, setChange] = useState(false);
    
    useEffect(() => {
        const fetchMatch = async () => {
            const response = await apiRequest.get('/match');
            setMatch(response.data);
        }
        fetchMatch();
        setChange(false);
    }, [change]);

  return (
    <>
      <Navbar />
      <div className="flex flex-row w-full h-screen items-center justify-center gap-2 p-2">
        <FeedPanel match={match} setChange={setChange}/>
        <ScoreCard match={match}/>
      </div>
    </>
  );
}
