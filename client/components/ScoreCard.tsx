import Image from "next/image";

const ScoreCard = () =>{

    const runs = [1, 1, 0, 1, 1, 4, 1, 1, 0, 0, 4, 0, 0, 4]

    const ballDesc = [
        {run: 1, over: "19.6" , desc: "Nitish Kumar Reddy to Tanzim Hasan Redddy: 1 run."},
        {run: 4, over: "19.5" , desc: "Nitish Kumar Reddy to Towhid Hridoy Redddy: 1 run. Catch Drop."},
        {run: 0, over: "19.4" , desc: "Nitish Kumar Reddy to Towhid Hridoy: 0 run."},
        {run: 1, over: "19.3" , desc: "Nitish Kumar Reddy to Tanzim Hasan Redddy: 1 run."},
        {run: 0, over: "19.2" , desc: "Nitish Kumar Reddy to Tanzim Hasan Redddy: 1 run."},
        {run: 4, over: "19.1" , desc: "Nitish Kumar Reddy to Towhid Hridoy Redddy: 1 run. Catch Drop."},
    ]

    const highlightText = (text:string) => {
        return text.replace(/(\d+ run.)|(Catch Drop)/gi, (match: string) => `<span>&nbsp;</span><b>${match}</b>`);
    };

    return (
        <div className="w-5/12 h-full rounded-lg bg-gray-200/50 border-2 p-2 px-3 overflow-y-scroll">
            <div className="flex flex-row items-center gap-2">
                <Image src="/downArrow.svg" width={15} height={15} alt="down arrow" />
                <p>Scorecard</p>
            </div>
           <div className="rounded-lg mt-2 border-2">
                <div className="bg-gray-200 py-2 px-2 flex justify-end items-center">
                    <button className="text-blue-600 font-bold text-sm">View Full Score Card</button>
                </div>
                <div className="py-2 px-2 flex flex-row justify-center items-center gap-20 text-sm">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p>IND</p>
                        <Image src="/India.webp" width={50} height={50} alt="India" className="rounded-2xl"/>
                        <div className="flex flex-col items-center justify-center border-2 px-2 py-1 rounded-lg">
                            <p>297 / 6</p>
                            <p>Over 20.0</p>
                        </div>
                    </div>
                    <p className="font-bold text-red-500 text-lg">vs</p>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p>BAN</p>
                        <Image src="/Bangla.png" width={50} height={50} alt="India" className="rounded-2xl"/>
                        <div className="flex flex-col items-center justify-center border-2 px-2 py-1 rounded-lg">
                            <p>164 / 7 *</p>
                            <p>Over 20.0</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-300 py-1.5 px-2 flex justify-center items-center text-sm">
                    <button className="font-bold">India Won By 133 runs</button>
                </div>
           </div>
           <table className="border-2 mt-2 w-full text-xs text-center">
           <colgroup>
                <col style={{width: "200px"}} />
            </colgroup>
            <thead className="bg-gray-300">
            <tr>
                <th>Batsman</th>
                <th>R</th>
                <th>B</th>
                <th>4s</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Tanzim Hasan Sakib*</td>
                <td>8</td>
                <td>8</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Towhid Hridoy</td>
                <td>63</td>
                <td>42</td>
                <td>5</td>
            </tr>
            </tbody>
           </table>
           <table className="border-2 mt-2 w-full text-xs text-center">
           <colgroup>
                <col style={{width: "200px"}} />
            </colgroup>
            <thead className="bg-gray-300">
            <tr>
                <th>Bowler</th>
                <th>O</th>
                <th>M</th>
                <th>R</th>
                <th>W</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Nitish Kumar Reddy*</td>
                <td>3.0</td>
                <td>0</td>
                <td>31</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Mayank Yadav</td>
                <td>4.0</td>
                <td>0</td>
                <td>32</td>
                <td>2</td>
            </tr>
            </tbody>
           </table>
           <div className="border-2 mt-2 w-full text-xs text-center flex flex-row items-center justify-between py-1 px-2 font-semibold bg-gray-200/50 rounded-md">
                <p>24 balls</p>
                <div className="flex flex-row gap-1 items-center justify-center">
                    {
                        runs.slice(0,10).map((run, index) => (
                            <div key={index} className="border-2 px-2 py-0.5 rounded-lg bg-gray-300">
                                <p>{run}</p>
                            </div>
                        ))
                    }
                </div>
           </div>
           <div className="border-2 mt-1 w-full text-xs text-center flex flex-row items-center gap-12 py-1.5 px-2 font-semibold bg-gray-200/50 rounded-md">
                <p>Extra</p>
                <p>11 (<i>b</i> <span className="font-normal">0</span>, <i>lb</i> <span className="font-normal">4</span>, <i>wd</i> <span className="font-normal">6</span>, <i>nb</i> <span className="font-normal">1</span>, <i>P</i> <span className="font-normal">0</span>)</p>
           </div>
           <div className="flex flex-row w-full mt-2 gap-1 text-sm">
                    <select className="h-[40px] w-full border-2 rounded-md px-2">
                        <option value="1">Bangladesh</option>
                    </select>
                    <select className="h-[40px] w-full border-2 rounded-md px-2">
                        <option value="1">1</option>
                    </select>
           </div>
           <div className="flex flex-row w-full mt-1 gap-1 relative text-sm">
            <Image src="/search.svg" width={18} height={18} alt="down arrow" className="absolute top-[11px] left-2"/>
            <input placeholder="default size" className="w-full border-2 rounded-md h-[40px] px-2 pl-8" />
            <button className="bg-red-500 text-white px-4 border-2 rounded-md">X</button>
           </div>
           <div className="flex flex-col text-xs mt-2 gap-2">
            {ballDesc.map((ball, index) => (
                <div key={index} className="flex flex-row items-center gap-5">
                    <p className={`rounded-full ${ball.run >= 1 ? 'bg-green-200' : 'bg-gray-300'} w-[40px] h-[40px] flex items-center justify-center font-bold`}>{ball.run}</p>
                    <p>{ball.over}</p>
                    <p className="flex flex-wrap w-[61.5%]" dangerouslySetInnerHTML={{ __html: highlightText(ball.desc)}}></p>
                    <Image src="/options.svg" width={20} height={20} alt="down arrow" className="cursor-pointer"/>
                </div>
            ))}
           </div>
        </div>
    )
}

export default ScoreCard;