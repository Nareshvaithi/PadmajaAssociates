import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo/CompanyLogo.png";
import { Navbardata } from "../store/store";
import { useState, useEffect, useContext } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { CgMenuLeft } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import MenuState from "../store/menuContext";

const WinNavbar = () => {
    const {menu,setmenu} = useContext(MenuState);
    const navigate = useNavigate();
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (scrollTop > lastScrollTop) {
          setIsScrollingUp(false); // Scrolling down
        } else {
          setIsScrollingUp(true); // Scrolling up
        }
  
        setLastScrollTop(scrollTop);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll); // Clean up on component unmount
      };
    }, [lastScrollTop]);

    return (
        <div className={`z-10 ${window.scrollY  ? "bg-white shadow-sm" : "bg-transparent"} fixed right-0 left-0 top-0 w-full h-fit ${isScrollingUp ? 'transform translate-y-0' : 'transform -translate-y-full'} transition-transform duration-500`}>
            <div className="container">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div onClick={() => navigate('/')} className="w-20 md:w-28 cursor-pointer">
                        <img src={Logo} alt="Company Logo" />
                    </div>
                    {/* Navbar Links */}
                    <nav className="hidden md:block">
                        <ul className="flex gap-3">
                            {Navbardata.map(({ id, lable, to }) => (
                                <li className="font-contentfont text-lg font-semibold text-gold" key={id}>
                                    <NavLink
                                        to={to}
                                        className={({ isActive }) =>
                                            isActive ? "active links" : "links"
                                        }
                                    >
                                        {lable}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <a className="hidden md:block" href="tel:+919600827972">
                    <div className="p-2 flex items-center text-gold font-bold gap-3 border border-gold rounded-tr-2xl rounded-bl-2xl hover:bg-gold hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
                        <span><FaPhoneVolume/></span>
                        <h1>Talk to Expert</h1>
                    </div>
                    </a>
                    <div onClick={()=>{setmenu(!menu)}} className="block md:hidden">
                        <span className="text-gold">{menu ? <MdClose size={30}/>:<CgMenuLeft size={30}/>}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WinNavbar;
