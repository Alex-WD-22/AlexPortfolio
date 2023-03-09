import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Footer from "../Layout/Footer";
import Style from "../Layout/Layout.module.css"
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import { useTheme } from "next-themes";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';
import Button from '@mui/material/Button';
import { IconButton } from "@mui/material";


export function NavBar({ }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { theme, setTheme } = useTheme();
  const isLightMode = theme === 'light';
  
  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

 
  return (
    <>
      <header className={Style.header}>
      <div className={Style.header_content}>
        
        <Link href="/#LandingPage">
          {"Alexander Nerz"}
        </Link>
      
        <div className="">
        <nav >
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li onClick={closeMobileMenu}><Link href="/#About"><span>About</span></Link></li>
            <li onClick={closeMobileMenu}><Link href="/#Projects"><span>Projects</span></Link></li>
            <li onClick={closeMobileMenu}><Link href="/#Contact"><span>Contact</span></Link></li>
            <IconButton
                sx={{ ml: 1 }}
                onClick={handleToggleTheme}
                color={isLightMode ? 'inherit' : 'secondary'}
                    >
            {isLightMode ? <Brightness3Icon /> : <LightModeIcon style={{ color: 'white' }} />}
            </IconButton>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <Close className="menu-icon" />
            ) : (
              <Menu className="menu-icon" />
            )}
          </div>
        </nav>
        </div>
            </div>
      </header>
 
    </>
  );
}
function Layout(props) {
  return (
    <div className="layout">
      <NavBar />
      <div className="main-container">
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
