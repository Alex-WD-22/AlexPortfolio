import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Footer from "../Layout/Footer";
import Style from "../Layout/Layout.module.css"
import Menu from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import { style } from "@mui/system";


export function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


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
            <li onClick={closeMobileMenu}><Link href="/#Skills"><span>Skills</span></Link></li>
            <li onClick={closeMobileMenu}><Link href="/#Projects"><span>Projects</span></Link></li>
            <li onClick={closeMobileMenu}><Link href="/#Contact"><span>Contact</span></Link></li>
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
