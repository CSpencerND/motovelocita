import { useEffect, useRef, useState } from "react"
import logo from "../Navbar/velocita-scaled.webp"
import { Divide as Hamburger } from "hamburger-react"
import { Link } from "react-router-dom"
import Tab from "./Tab"
import MenuItem from "./MenuItem"
import "./Navbar.css"

const Navbar = () => {
    const navMenuRef = useRef(null)
    const headerRef = useRef(null)
    const menuButtonRef = useRef(null)

    const [navColor, setNavColor] = useState(null)
    const [headerColor, setHeaderColor] = useState(null)

    const toggleNavMenu = () => {
        navMenuRef.current.classList.toggle("translate-x-full")
        document.querySelector("html").classList.toggle("overflow-y-hidden")
        setNavColor((prev) =>
            prev === null ? "bg-base-200/90 backdrop-blur" : null
        )
        setHeaderColor((prev) =>
            prev === null ? "bg-base-200/90 backdrop-blur" : null
        )
    }

    const toggleNavMenuWithOverlay = () => {
        menuButtonRef.current.firstChild.click() && toggleNavMenu()
    }

    useEffect(() => {
        const menu = document.querySelector(".menu__list")
        if (menu) {
            menu.addEventListener("click", (event) => {
                if (event.target.classList.contains("menu__link")) {
                    menu.style.setProperty(
                        "--underline-width",
                        `${event.target.offsetWidth}px`
                    )
                    menu.style.setProperty(
                        "--underline-offset-x",
                        `${event.target.offsetLeft}px`
                    )
                }
            })
            menu.addEventListener("mouseleave", () =>
                menu.style.setProperty("--underline-width", "0")
            )
        }
    })

    return (
        <>
            <header
                className={`absolute w-full z-50 std-transition ${headerColor}`}
                ref={headerRef}
            >
                <nav
                    className={`navbar container ${navColor} mx-auto flex justify-between px-4`}
                >
                    <Link to="/">
                        <img
                            className="max-h-12 md:max-h-16 rounded-box pl-1"
                            src={logo}
                            alt="velocita logo"
                            title="Velocita"
                        />
                    </Link>

                    <button
                        onClick={toggleNavMenu}
                        id="menuButton"
                        className="btn btn-square btn-ghost z-50 lg:hidden backdrop-blur-sm"
                        ref={menuButtonRef}
                        type="menu"
                        aria-controls="navMenu"
                    >
                        <Hamburger id="menuButtonIcon" rounded size={26} color="#eaeae1" />
                        <span className="sr-only">MENU</span>
                    </button>
                    {/* Alternative for smaller button */}
                    {/* btn-sm grid content-center */}

                    <ul
                        className="tabs p-2 rounded-box max-lg:hidden uppercase menu__list"
                    >
                        <Tab href="/" label="Home" />
                        <Tab href="/services" label="Services" />
                        <Tab href="/gallery" label="Gallery" />
                        <Tab href="/about" label="About" />
                        <Tab href="/contact" label="Contact" />
                    </ul>
                </nav>
            </header>

            <div
                onClick={toggleNavMenuWithOverlay}
                className={`drawer drawer-end absolute top-[64px] md:top-[88px] z-50 translate-x-full std-transition border-t border-base-content backdrop-blur-sm`}
                id="navMenu"
                ref={navMenuRef}
            >
                <ul
                    className={`menu w-52 md:w-80 ${navColor} shadow-box text-primary uppercase std-transition`}
                >
                    <MenuItem href="/" label="Home" />
                    <MenuItem href="/services" label="Services" />
                    <MenuItem href="/gallery" label="Gallery" />
                    <MenuItem href="/about" label="About" />
                    <MenuItem href="/contact" label="Contact" />
                </ul>
            </div>
        </>
    )
}

export default Navbar
