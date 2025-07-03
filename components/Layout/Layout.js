import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Footer from "../Layout/Footer";
import Style from "../Layout/Layout.module.css";

import MMenu from "@mui/icons-material/Menu";
import MClose from "@mui/icons-material/Close";

import { useTheme } from "next-themes";

import {
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, SettingsIcon } from "@chakra-ui/icons";

export function NavBar() {
  const [click, setClick] = useState(false);
  const menuRef = useRef(null);

  // theme keys
  const { theme, resolvedTheme, setTheme } = useTheme();

  // SSR guard
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // mobile menu
  const handleClick = () => setClick((c) => !c);
  const closeMobileMenu = (id) => {
    setClick(false);
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Which icon to show up top
  let triggerIcon = <SettingsIcon color={resolvedTheme === "dark" ? "white" : "black"} />;
  if (theme === "light") triggerIcon = <SunIcon color="black" />;
  if (theme === "dark") triggerIcon = <MoonIcon color="white" />;

  // Dot placeholder so nothing shifts
  const Dot = ({ active }) => (
    <Box
      w="6px"
      h="6px"
      bg={active ? "currentColor" : "transparent"}
      borderRadius="full"
      mr="8px"
      flexShrink={0}
    />
  );

  return (
    <header className={Style.header}>
      <div className={Style.header_content}>
        <Link href="/">Alexander Nerz</Link>
        <nav>
          <ul ref={menuRef} className={click ? "nav-options active" : "nav-options"}>
            {["About", "Projects", "Contact"].map((id) => (
              <li key={id} onClick={() => closeMobileMenu(id)}>
                <Link href={`/#${id}`}><span>{id}</span></Link>
              </li>
            ))}

            <ChakraMenu>
              {/* Trigger button */}
              <MenuButton
                as={IconButton}
                aria-label="Theme selector"
                icon={triggerIcon}
                variant="ghost"
                size="sm"
                ml={2}
                border="none"
                _focus={{ boxShadow: "none", outline: "none" }}
                _active={{ boxShadow: "none", transform: "none" }}
                // _hover={{
                //   bg: resolvedTheme === "dark" ? "transparent" : "gray.100",
                // }}
              />

              {/* Dropdown – NO hover on this box */}
              <MenuList
                minW="140px"
                p="4px"
                border="none"
                boxShadow="0 4px 12px rgba(0,0,0,0.1)"   /* always visible */
                bg="var(--button-bg)"
                color="var(--foreground)"
                // _hover={{}}      /* override any default hover */
                _focus={{ boxShadow: "none", outline: "none" }}
              >
                {[
                  { key: "light",  icon: <SunIcon mr="6px" />,                                   label: "Light"  },
                  { key: "dark",   icon: <MoonIcon mr="6px" color={resolvedTheme === "dark" ? "white" : "black"} />, label: "Dark"   },
                  { key: "system", icon: <SettingsIcon mr="6px" color={resolvedTheme === "dark" ? "white" : "black"} />, label: "System" },
                ].map(({ key, icon, label }) => (
                  <MenuItem
                    key={key}
                    onClick={() => setTheme(key)}
                    px="8px"
                    py="6px"
                    fontSize="sm"
                    border="none"
                    transform="none"
                    bg={theme === key ? "var(--button-bg)" : "transparent"}
                    // _hover={{
                    //   /* only item background changes on hover */
                    //   bg:
                    //     resolvedTheme === "dark"
                    //       ? "var(--hover-bg-dark)"
                    //       : "var(--hover-bg-light)",
                    //   transform: "none",
                    // }}
                    _active={{
                      /* slightly deeper overlay on click */
                      bg:
                        resolvedTheme === "dark"
                          ? "rgba(255,255,255,0.16)"
                          : "rgba(0,0,0,0.08)",
                      transform: "none",
                    }}
                    _focus={{ boxShadow: "none", outline: "none" }}
                  >
                    <Dot active={theme === key} />
                    {icon}
                    {label}
                  </MenuItem>
                ))}
              </MenuList>
            </ChakraMenu>
          </ul>

          {/* mobile hamburger */}
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <MClose className="menu-icon" /> : <MMenu className="menu-icon" />}
          </div>
        </nav>
      </div>
    </header>
  );
}

function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
