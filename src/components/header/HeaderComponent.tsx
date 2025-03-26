import { useState } from "react";
import UserInfoComponent from "./UserInfoComponent";

export default function HeaderComponent(){
    
    const [isUserClicked, setIsUserClicked] = useState(true);
    
    return (
        <div className="fixed top-5 left-5 right-5 flex flex-row flex-grow">
            <div className="font-roboto-mono text-white font-bold w-fit flex-none text-3xl">
                <img src="images/icons/icon.png" className="w-20"/>
            </div>
            <div className="grow text-white font-roboto-mono">
                <ul className="list-none flex gap-5 justify-center underline underline-offset-4 decoration-white">
                    <li>
                        <a href="#">Games</a>
                    </li>
                    <li>
                        <a href="#">Score</a>
                    </li>
                    <li>
                        <a href="#">Create a game</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                </ul>
            </div>
            <div className="w-fit flex-none" onClick={() => setIsUserClicked(!isUserClicked)}>
                {
                    isUserClicked ? <img src="images/icons/user.png" className="w-10"/> : <UserInfoComponent/>
                }
            </div>
        </div>
    );
}