import { useContext } from "react";
import MenuState from "../../store/menuContext";
import { MdClose } from "react-icons/md";
import Logo from "../../assets/logo/CompanyLogo.png"
import { NavLink, useNavigate } from "react-router-dom";
import { Navbardata, socialmedia } from "../../store/store";
import { FaPhoneVolume } from "react-icons/fa6";

const ResNavbar = ()=>{
    const navigate = useNavigate()
    const {menu,setmenu} = useContext(MenuState);
    return(
        <div className={`z-10 fixed top-0 left-0 inset-0 overflow-y-scroll ${menu ? "translate-y-0" : "-translate-y-full"} w-screen h-auto bg-litegold transition-all duration-500`}>
            <div className="container">
            <div onClick={() => navigate('/')} className="py-2 cursor-pointer flex justify-between items-center">
                <div className="w-20">
                    <img src={Logo} alt="Company Logo" />
                </div>
                <div className="text-gold">
                    <MdClose size={30} onClick={() => {setmenu(false);window.scrollTo(0,0)}} />
                </div>
            </div>
            <nav>
                <ul>
                    {
                        Navbardata.map(({id,lable,to})=>(
                            <li
                            className="text-xl py-2 font-contentfont" 
                            key={id} 
                            onClick={()=>{setmenu(false);window.scrollTo(0,0)}}>
                                <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active links" : "links"
                                }
                                 to={to}>
                                    {lable}
                                </NavLink>
                                </li>
                        ))
                    }
                </ul>
            </nav>
            <div className="py-5">
                <div className="w-fit p-2 flex items-center font-contentfont text-gold font-bold gap-3 border border-gold rounded-tr-2xl rounded-bl-2xl hover:bg-gold hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
                    <span><FaPhoneVolume/></span>
                    <h1>Talk to Expert</h1>
                </div>
            </div>
            <div>
                <h1 className="font-headfont text-2xl font-bold">Follow us</h1>
                {
                    socialmedia.map(({id,icon,link,name,color})=>(
                        <a className={`inline-block mr-2 ${color}`} href="" title={name} key={id}>{icon}</a>
                    ))
                }
            </div>
            <div className="py-5">
                <h1 className="font-headfont text-2xl font-bold">INDIA</h1>
                <p className="font-contentfont text-lg">Plot No 111, main road, Jayam nagar, Villianur, Uruvaiyar, Ponducherry  - 605110</p>
            </div>
            <div className="py-5 flex flex-col text-center">
                <div className="w-32 border border-gold p-4 rounded-full mx-auto">
                    <img src={Logo} alt="Company Logo" />
                </div>
                <p>&copy; 2024 Padmaja Associates.</p>
                <p>All rights recieved</p>
            </div>
            </div>
    </div>
    
    )
}

export default ResNavbar;