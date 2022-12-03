import { Routes, Route, useLocation } from "react-router-dom"
import Home from "../../pages/Home/Home"
import Services from "../../pages/Services/Services"
import Gallery from "../../pages/Gallery/Gallery"
import About from "../../pages/About/About"
import Contact from "../../pages/Contact/Contact"
import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = ({ useTitle }) => {
    const location = useLocation()

    const variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { delay: 0.25, duration: 0.25, ease: "easeInOut" },
        },
        exit: {
            opacity: 0,
            transition: { ease: "easeInOut" },
        },
    }

    const motions = {
        variants: variants,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
    }

    return (
        <AnimatePresence mode="sync">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={<Home useTitle={useTitle} motions={motions} />}
                />
                <Route
                    path="/services"
                    element={<Services useTitle={useTitle} motions={motions} />}
                />
                <Route
                    path="/gallery"
                    element={<Gallery useTitle={useTitle} motions={motions} />}
                />
                <Route
                    path="/about"
                    element={<About useTitle={useTitle} motions={motions} />}
                />
                <Route
                    path="/contact"
                    element={<Contact useTitle={useTitle} motions={motions} />}
                />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
