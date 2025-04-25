import { useEffect } from "react";
import { setValue } from "../slices/PageStateSlice";
import { useDispatch } from "react-redux";
import { Pages } from "../enums/Pages";

export default function PracticePage(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setValue(Pages.PRACTICE));
    },[]);

    return(
        <div className="font-roboto-mono text-white">
            Practice page
        </div>
    );

}