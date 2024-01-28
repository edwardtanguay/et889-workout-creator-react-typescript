import { useState, useEffect, useRef, useCallback } from "react"
import { NavLink } from "react-router-dom"
import MenuLink from "./MenuLink.tsx"
import DropdownLink from "./DropdownLink.tsx"
import { GiBiceps } from "react-icons/gi"
import * as MdIcons from "react-icons/md"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoCloseSharp } from "react-icons/io5"

const Navbar = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/workout", label: "Workout" },
    { path: "/profile", label: "Profile" },
  ]

  // Navbar Scrolling Functionality
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef(null)
  const handleScroll = useCallback(() => {
    if (navRef.current) {
      const scrollTop = window.scrollY
      const isCurrentlyScrolled = scrollTop > 0

      setIsScrolled(isCurrentlyScrolled)
    }
  }, [])
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  // Burger Menu Functionality
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Dropdown Menu Close on Window Resize Functionality
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMenuOpen])

  // Dark Mode Functionality
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    return savedTheme ? JSON.parse(savedTheme) : true
  })

  useEffect(() => {
    const element = document.documentElement
    if (isDarkMode) {
      element.classList.add("dark")
      localStorage.setItem("theme", JSON.stringify(true))
    } else {
      element.classList.remove("dark")
      localStorage.setItem("theme", JSON.stringify(false))
    }
  }, [isDarkMode])

  return (
    <div className="w-full font-firacode">
      <nav
        ref={navRef}
        className={`z-50 w-full h-20 fixed top-0 left-0 bg-green-500/20 flex items-center justify-between pr-4 md:pr-10 ${
          isScrolled
            ? "bg-slate-200 dark:bg-slate-950 shadow-lg shadow-green-500 duration-300 ease-in-out"
            : ""
        }`}
      >
        {/* Navigation Links */}
        <ul className="flex gap-6 items-center">
          <NavLink to="/">
            <GiBiceps className="text-7xl" />
          </NavLink>

          {navLinks.map((item, index) => (
            <li key={index}>
              <MenuLink to={item.path}>{item.label}</MenuLink>
            </li>
          ))}
        </ul>

        {/* Darkmode toggler */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="hidden md:block text-2xl text-green-500"
        >
          {isDarkMode ? <MdIcons.MdDarkMode /> : <MdIcons.MdLightMode />}
        </button>

        {/* Burgermenu toggler */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-5xl text-green-500"
        >
          {isMenuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>

        {/* Dropdown Menu */}
        <ul
          className={`z-50 fixed bg-slate-100 dark:bg-slate-950 duration-300 ease-in-out flex flex-col items-center justify-evenly w-full h-dvh pb-24 top-20 ${
            isMenuOpen ? "right-0" : "right-full"
          }`}
        >
          {navLinks.map((link, index) => (
            <DropdownLink key={index} toggleMenu={toggleMenu} to={link.path}>
              {link.label}
            </DropdownLink>
          ))}

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className=" text-2xl text-green-500"
          >
            {isDarkMode ? <MdIcons.MdDarkMode /> : <MdIcons.MdLightMode />}
          </button>
        </ul>
      </nav>
      <div className="w-full h-20"></div>
    </div>
  )
}

export default Navbar
