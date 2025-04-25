import Typewriter from 'typewriter-effect';
import { setValue } from "../slices/PageStateSlice";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { Pages } from '../enums/Pages';

export default function HomePage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setValue(Pages.HOME));
    },[]);

    return (
        <div className="font-roboto-mono font-bold text-center text-white">
            <div className="text-white text-5xl font-bold">
                <Typewriter
                    options={
                        {
                            strings: ["Test Your Typing Speed & Accuracy", "Challenge Yourself Now!"],
                            delay: 50,
                            autoStart: true,
                            loop: true,
                        }
                    }
                    onInit={(typewriter) => {
                        typewriter
                          .typeString("Test Your Typing Speed & Accuracy")
                          .pauseFor(500)
                          .typeString("<br> Challenge Yourself Now!")
                          .start();
                      }}
                />

            </div>
            <div className="flex felx-row ml-auto mr-auto gap-5 justify-center mt-10">
                <button className="text-2xl p-2 border border-solid border-white rounded-2xl">PRACTICE</button>
                <button className="text-2xl p-2 border border-solid text-black bg-white rounded-2xl">TEST SPEED</button>
            </div>
        </div>
    );
}