import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import BottomNav from "./components/BottomNav/BottomNav"
import Footer from "./components/BottomNav/Footer"
import AnimatedRoutes from "./pages"
import { BrowserRouter as Router } from "react-router-dom"
import { isMobile } from "react-device-detect"
import { useState } from "react"

const App = ({ setTheme, useTitle }) => {
    setTheme("luxury")
    const [location, setLocation] = useState("/")

    return (
        <Router>
            {location !== "/404" && <Navbar />}
            <AnimatedRoutes
                useTitle={useTitle}
                getLocation={(location) => setLocation(location)}
            />
            {location !== "/404" && (isMobile ? <BottomNav /> : <Footer />)}
        </Router>
    )
}

export default App
