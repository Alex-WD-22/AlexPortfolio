import Link from "next/link";
import { useState, useEffect  } from "react";
import Footer from "../Layout/Footer";
import Style from "../Layout/Layout.module.css"
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import { useTheme } from "next-themes";
import { IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon,  } from '@chakra-ui/icons'

export function NavBar({ }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { theme, setTheme } = useTheme();
  const [isLightMode, setIsLightMode] = useState(true);
  

  useEffect(() => {
    if (theme === 'light') {
      setIsLightMode(true);
    } else {
      setIsLightMode(false);
    }
  }, [theme]);
  
  function handleToggleTheme() {
    if (isLightMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

 
  return (
    <>
      <header className={Style.header}>
      <div className={Style.header_content}>
        
        <Link href="#">
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
            {isLightMode ? (
  <MoonIcon key="moon-icon" />
) : (
  <SunIcon key="sun-icon"  />
)}
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
