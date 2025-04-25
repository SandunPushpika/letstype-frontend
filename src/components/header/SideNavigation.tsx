import { useEffect, useState } from "react";
import { setValue } from "../../slices/PageStateSlice";
import { useDispatch, useSelector } from "react-redux";
import { Pages } from "../../enums/Pages";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

export default function SideNavigation() {

    const [homeVisibility, setHomeVisibility] = useState(false);
    const [speedVisibility, setSpeedVisibility] = useState(true);
    const [practiceVisibility, setPracticeVisibility] = useState(true);
    const [activeTab, setActiveTab] = useState(1);
    const navigate = useNavigate();

    const pageState = useSelector((state: RootState) => state.sideNavigation.value);

    const dispatch = useDispatch();

    const mouseEnterToComponent = (component: number) => {
        switch (component) {
            case 1:
                setHomeVisibility(false);
                setSpeedVisibility(true);
                setPracticeVisibility(true);
                break;
            case 2:
                setHomeVisibility(true);
                setSpeedVisibility(false);
                setPracticeVisibility(true)
                break;
            case 3:
                setHomeVisibility(true);
                setSpeedVisibility(true);
                setPracticeVisibility(false);
                break;
        }
    }

    const onMouseLeave = () => {
        mouseEnterToComponent(activeTab);
    }

    const setActiveTabState = (tab: number) => {
        
        setActiveTab(tab);
        if(tab == 1){
            dispatch(setValue(Pages.HOME));
            navigate("/");
        }else if(tab == 2){
            dispatch(setValue(Pages.SPEED_TEST));
            navigate("/speed-test");
        }else{
            dispatch(setValue(Pages.PRACTICE));
            navigate("practice");
        }
    }

    // Set the page state
    useEffect(() => {
        
        switch (pageState) {
            case Pages.HOME:
                setHomeVisibility(false);
                setSpeedVisibility(true);
                setPracticeVisibility(true);
                break;
            case Pages.SPEED_TEST:
                setHomeVisibility(true);
                setSpeedVisibility(false);
                setPracticeVisibility(true)
                break;
            case Pages.PRACTICE:
                setHomeVisibility(true);
                setSpeedVisibility(true);
                setPracticeVisibility(false);
                break;
        }

    }, [pageState])

    return (
        <div className="fixed left-3 top-1/2 -translate-y-1/2 flex flex-col text-white w-fit p-5 gap-10">
            {/* Home */}
            <div
                className="flex flex-row gap-5 w-fit cursor-pointer"
                onMouseEnter={() => mouseEnterToComponent(1)}
                onMouseLeave={onMouseLeave}
                onClick={() => setActiveTabState(1)}
            >
                <img src="images/icons/home.png" className="w-10" />
                <p className={`font-roboto-mono font-bold mt-2 transition-all duration-500 ease-in-out transform ${
                    homeVisibility ? "opacity-0 invisible translate-x-[-10px]" : "opacity-100 visible translate-x-0"
                }`}>
                    HOME
                </p>
            </div>

            {/* Speed Test */}
            <div
                className="flex flex-row gap-5 w-fit cursor-pointer"
                onMouseEnter={() => mouseEnterToComponent(2)}
                onMouseLeave={onMouseLeave}
                onClick={() => setActiveTabState(2)}
            >
                <img src="images/icons/type.png" className="w-10" />
                <p className={`font-roboto-mono font-bold mt-2 transition-all duration-500 ease-in-out transform ${
                    speedVisibility ? "opacity-0 invisible translate-x-[-10px]" : "opacity-100 visible translate-x-0"
                }`}>
                    SPEED TEST
                </p>
            </div>

            {/* Practice */}
            <div
                className="flex flex-row gap-5 w-fit cursor-pointer"
                onMouseEnter={() => mouseEnterToComponent(3)}
                onMouseLeave={onMouseLeave}
                onClick={() => setActiveTabState(3)}
            >
                <img src="images/icons/practice.png" className="w-10" />
                <p className={`font-roboto-mono font-bold mt-2 transition-all duration-500 ease-in-out transform ${
                    practiceVisibility ? "opacity-0 invisible translate-x-[-10px]" : "opacity-100 visible translate-x-0"
                }`}>
                    PRACTICE
                </p>
            </div>
        </div>
    );

}