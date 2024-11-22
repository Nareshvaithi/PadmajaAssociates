import { Outlet } from "react-router-dom";
import WinNavbar from "../components/WinNavbar";
import Footer from "../components/Footer/Footer";
import ResNavbar from "../components/navbar/ResNavbar";

const Layout = ()=>{
    return(
        <div>
            <WinNavbar/>
            <ResNavbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;