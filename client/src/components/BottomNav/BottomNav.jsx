import { useEffect, useRef } from "react"
import { Mail, Phone, Instagram } from "react-feather"
// import { Mail, Phone, MapPin, Instagram } from "react-feather"
import { Link } from "react-router-dom"

const BottomNav = () => {
    const bottomNavRef = useRef(null)

    useEffect(() => {
        let lastScrollY = window.scrollY

        const toggleNav = () => {
            if (lastScrollY < window.scrollY) {
                bottomNavRef.current.classList.add("translate-y-full")
            } else {
                bottomNavRef.current.classList.remove("translate-y-full")
            }
            lastScrollY = window.scrollY
        }

        window.addEventListener("scroll", toggleNav)
        return () => window.removeEventListener("scroll", toggleNav)
    }, [])

    return (
        <nav
            className="btm-nav z-50 grid grid-flow-col justify-center gap-8 bg-base-100/75 backdrop-blur transition-all duration-300 ease-in-out shadow-box"
            aria-label="bottom navigation"
            ref={bottomNavRef}
        >
            <Link
                to="/contact"
                className="btn btn-square btn-outline bg-base-100/50"
                onClick={() => window.scrollTo(0, 0)}
            >
                <Mail />
            </Link>
            <a
                href="tel:718-710-0545"
                className="btn btn-square btn-outline bg-base-100/50"
            >
                <Phone />
            </a>

        {/*
            <a
                href="https://www.google.com/maps/place/93+Forrest+St,+Brooklyn,+NY+11206/@40.7027338,-73.9327001,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25c06da2a9005:0xe7b68f519eb3fe76!8m2!3d40.7027338!4d-73.9327001"
                target="_blank"
                rel="noreferrer"
                className="btn btn-square btn-outline bg-base-100/50"
            >
                <MapPin />
            </a>
        */}

            <a
                href="https://www.instagram.com/velocita_moto/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-square btn-outline bg-base-100/50"
            >
                <Instagram />
            </a>
        </nav>
    )
}

export default BottomNav
