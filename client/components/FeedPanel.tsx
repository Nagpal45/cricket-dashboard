"use client";
import Image from "next/image";
import { useState } from "react";

const FeedPanel = () => {
  const [checked, setChecked] = useState(false);

  const ballOptions = [
    { name: "Ball Start", color: "bg-green-600" },
    { name: "Wide", color: "bg-amber-600" },
    { name: "No Ball", color: "bg-cyan-950" },
  ];
  const runOptions = [
    { name: 0, color: "bg-blue-700" },
    { name: 1, color: "bg-cyan-950" },
    { name: "Wicket", color: "bg-red-700" },
    { name: 2, color: "bg-teal-600" },
    { name: 4, color: "bg-emerald-200" },
    { name: 6, color: "bg-gray-400" },
  ];
  const decisionOptions1 = [
    { name: "Bowler Stop", color: "bg-purple-800" },
    { name: "1 or 2", color: "bg-blue-700" },
    { name: "2 or 4", color: "bg-purple-800" },
    { name: "4 or 6", color: "bg-amber-700" },
    { name: "Ball In Air", color: "bg-purple-800" },
    { name: "Others", color: "bg-cyan-950" },
    { name: "3", color: "bg-purple-800" },
    { name: "Boundary Check", color: "bg-cyan-950" },
    { name: "Appeal", color: "bg-teal-700" },
    { name: "Catch Drop", color: "bg-cyan-950" },
  ];
  const decisionOptions2 = [
    { name: "Leg Bye", color: "bg-sky-400" },
    { name: "Bye", color: "bg-green-500" },
    { name: "Third Umpire", color: "bg-teal-700" },
    { name: "Review", color: "bg-red-700" },
    { name: "Done", color: "bg-green-800" },
    { name: "Misfield", color: "bg-cyan-950" },
    { name: "Overthrow", color: "bg-violet-700" },
    { name: "Wicket Confirm", color: "bg-red-700" },
  ];

  return (
    <div className="w-full h-full rounded-lg bg-gray-200/50 border-2 py-1 px-3">
      <div className="w-full flex flex-row gap-5 items-center">
        <div className="flex flex-col gap-2">
          <label htmlFor="striker" className="font-semibold">
            Batsman(Striker)
          </label>
          <select
            name="striker"
            className="w-[315px] h-[40px] border border-gray-500 rounded-md"
          >
            <option>Select Batsman</option>
          </select>
        </div>
        <Image
          src="/swap.svg"
          width={20}
          height={20}
          alt="swap"
          className="mt-8"
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="nonStriker" className="font-semibold">
            Batsman(Non Striker)
          </label>
          <select
            name="nonStriker"
            className="w-[315px] h-[40px] border border-gray-500 rounded-md"
          >
            <option>Select Batsman</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="bowler" className="font-semibold">
            Bowler
          </label>
          <select
            name="bowler"
            className="w-[315px] h-[40px] border border-gray-500 rounded-md"
          >
            <option>Select Batsman</option>
          </select>
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <p className="font-semibold">Score:</p>
        <button className="flex flex-col items-center justify-center border-2 p-1 rounded-lg mt-5">
          <label className="group relative inline-flex cursor-pointer flex-col items-center">
            <input
              className="peer sr-only"
              type="checkbox"
              onChange={() => setChecked(!checked)}
            />
            <div className="relative h-[21px] w-10 rounded-full bg-gray-400 transition-all duration-500 after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-gradient-to-br after:from-gray-100 after:to-gray-300 after:transition-all after:duration-500 peer-checked:bg-blue-500 peer-checked:after:translate-x-5 peer-checked:after:from-white peer-checked:after:to-gray-100 hover:after:scale-95 active:after:scale-90">
              <span className="absolute inset-1 rounded-full from-white/20 via-transparent to-transparent"></span>
              <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 peer-checked:opacity-100"></span>
            </div>
          </label>
          <p className="mt-2 text-sm">Mute & Text {checked ? "On" : "Off"}</p>
        </button>
      </div>
      <p className="font-semibold">Extra:</p>
      <div className="w-full flex flex-row h-[32%] text-white font-semibold">
        <div className="flex flex-col w-[25%] h-full">
          {ballOptions.map((option, index) => (
            <button
              key={index}
              className={`rounded-lg m-1 flex-1 ${option.color}`}
            >
              {option.name}
            </button>
          ))}
        </div>
        <div className="flex flex-row flex-wrap w-[75%] h-full ">
          {runOptions.map((option, index) => (
            <button
              key={index}
              className={`m-1 rounded-lg w-[32.2%] ${option.color}`}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-row h-[21%] flex-wrap text-white font-semibold">
        {decisionOptions1.map((option, index) => (
          <button
            key={index}
            className={`rounded-lg m-1 h-[45%] ${option.color} w-[19.2%]`}
          >
            {option.name}
          </button>
        ))}
      </div>
      <div className="w-full flex flex-row h-[22%] flex-wrap text-white font-semibold m-0.5">
        {decisionOptions2.map((option, index) => (
          <button
            key={index}
            className={`rounded-lg m-1 h-[45%] ${option.color} w-[24.2%]`}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedPanel;
