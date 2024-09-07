import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="h-[72px]">
            <Navbar/>
            </div>
            <Outlet/>
        </div>
    );
};

export default Root;