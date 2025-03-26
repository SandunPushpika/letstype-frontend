import { useState } from "react";
import SideNavigation from "../components/header/SideNavigation";
import HomePage from "./HomePage";
import HeaderComponent from "../components/header/HeaderComponent";
import SpeedTestPage from "./SpeedTestPage";
import PracticePage from "./PracticePage";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Pages } from "../enums/Pages";

function Dashboard() {

    const pageState = useSelector((state: RootState) => state.sideNavigation.value);
    
    const getPage = () => {

        if(pageState == Pages.HOME){
            return <HomePage/>
        }else if(pageState == Pages.SPEED_TEST){
            return <SpeedTestPage/>
        }else{
            return <PracticePage/>
        }
    }

    return (
        <div className="bg-black container h-full ml-auto mr-auto">
            <HeaderComponent/>
            <SideNavigation />
            <div className="flex items-center justify-center h-screen">
                {
                    getPage()
                }
            </div>
        </div>
    );
}

export default Dashboard;