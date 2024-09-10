import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="h-[66px] md:h-[72px]">
            <Navbar/>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;