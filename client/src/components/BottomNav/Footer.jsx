import { Mail, Phone, Instagram } from "react-feather"
// import { Mail, Phone, MapPin, Instagram } from "react-feather"
import { Link } from "react-router-dom"
import { isMobile } from "react-device-detect"

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 -mt-6 grid grid-flow-col gap-4 max-w-sm mx-auto">
            <Link
                to="/contact"
                className="btn btn-square btn-outline bg-base-100"
                aria-label="Link to contact page"
                title="Contact"
                onClick={() => window.scrollTo(0, 0)}
            >
                <Mail />
            </Link>
            {isMobile ? (
                <a
                    href="tel:718-710-0545"
                    aria-label="Link to phone number"
                    title="Telephone"
                    className="btn btn-square btn-outline bg-base-100"
                >
                    <Phone />
                </a>
            ) : null}

            {/*
            <a
                href="https://www.google.com/maps/place/93+Forrest+St,+Brooklyn,+NY+11206/@40.7027338,-73.9327001,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25c06da2a9005:0xe7b68f519eb3fe76!8m2!3d40.7027338!4d-73.9327001"
                target="_blank"
                className="btn btn-square btn-outline bg-base-100"
            >
                <MapPin />
            </a>
        */}

            <a
                href="https://advontherocks.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to Adventure On The Rocks"
                title="Adventure On The Rocks"
                className="btn btn-square btn-outline bg-base-100"
            >
                <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>
            </a>

            <a
                href="https://www.instagram.com/velocita_moto/"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to Instagram"
                title="Instagram"
                className="btn btn-square btn-outline bg-base-100"
            >
                <Instagram />
            </a>
        </footer>
    )
}

export default Footer
