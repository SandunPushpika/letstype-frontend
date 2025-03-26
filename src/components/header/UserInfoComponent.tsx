import { useState } from "react";

export default function UserInfoComponent(){
    
    const [name, setName] = useState("Guest");
    
    return (
        <div className="font-roboto-mono font-bold text-white bg-slate-800 rounded-2xl">
            <ul className="flex flex-col">
                <li className="border-b-2 border-slate-600 p-2">
                    <div className="flex flex-row">
                        <img src="images/icons/user.png" className="w-10"/>
                        <span className="mt-2">{name}</span>
                    </div>
                </li>
                <li className="border-slate-600 border-b-2 p-2 text-left pr-5">
                    <a href="#">Settings</a>
                </li>
                <li className="border-slate-600 border-b-2 p-2 text-left pr-5">
                    <a href="#">Sign In</a>
                </li>
                <li className="p-2 text-left pr-5">
                    <a href="#">Register</a>
                </li>
            </ul>
        </div>
    );
}