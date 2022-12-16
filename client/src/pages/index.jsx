import { useEffect } from "react"
import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import Home from "./Home"
import Services from "./Services"
import Gallery from "./Gallery"
import About from "./About"
import Contact from "./Contact"
import NotFound from "./NotFound"
import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = ({ useTitle, getLocation }) => {
    const location = useLocation()

    useEffect(() => {
        getLocation(location.pathname)
        // eslint-disable-next-line
    }, [location])

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
                <Route
                    path="/404"
                    element={<NotFound useTitle={useTitle} motions={motions} />}
                />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
