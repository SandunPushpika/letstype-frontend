import SideNavigation from "../components/header/SideNavigation";
import HomePage from "./HomePage";
import HeaderComponent from "../components/header/HeaderComponent";
import SpeedTestPage from "./SpeedTestPage";
import { Route, Routes } from "react-router-dom";
import PracticePage from "./PracticePage";

function Dashboard() {

    return (
        <div className="bg-black container h-full ml-auto mr-auto">
            <HeaderComponent/>
            <SideNavigation />
            <div className="flex items-center justify-center h-screen">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/speed-test" element={<SpeedTestPage />} />
                    <Route path="/practice" element={<PracticePage/>} />
                </Routes>
            </div>
        </div>
    );
}

export default Dashboard;