import { useState } from "react";
import TypingBox from "../components/container/TypingBox";

export default function SpeedTestPage(){
    
    const [time, setTime] = useState();
    const [level, setLevel] = useState();

    const paragraph = "Technology has transformed the way we live, work, and communicate. From the rise of artificial intelligence to the expansion of cloud computing, innovations continue to reshape industries and improve efficiency. The internet has made information more accessible than ever, enabling people to learn new skills and connect globally. As advancements in automation and machine learning progress, ethical considerations and cybersecurity become increasingly important. While technology offers countless benefits, it also presents challenges that require responsible use and continuous adaptation to an ever-changing digital landscape.";

    const handleTimeChange = (event: any) => {
        setTime(event.target.value);
    }

    const handleLevelChange = (event: any) => {
        setLevel(event.target.value);
    }

    return(
        <div className="font-roboto-mono text-white">
            <div className="mb-10">
                <h1 className="text-2xl font-bold">Let's Start!</h1>
            </div>
            <div className="flex gap-5 justify-center">
                <select value={time} onChange={handleTimeChange} className="bg-black border border-solid border-white rounded-xl pr-5 pl-5 pt-2 pb-2">
                    <option value="30">30 Seconds</option>
                    <option value="60">1 Minute</option>
                    <option value="120">2 Minute</option>
                    <option value="300">5 Minute</option>
                </select>
                <select value={level} onChange={handleLevelChange} className="bg-black border border-solid border-white rounded-xl pr-5 pl-5 pt-2 pb-2">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                    <option value="expert">Expert</option>
                </select>
                <button className="bg-white border border-solid text-black font-bold rounded-xl pr-5 pl-5 pt-2 pb-2">
                    START
                </button>
            </div>
            <div>
                <TypingBox text={paragraph}/>
            </div>
        </div>
    );
}