import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import BottomNav from "./components/BottomNav/BottomNav"
import Footer from "./components/BottomNav/Footer"
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes"
import { BrowserRouter as Router } from "react-router-dom"
import { isMobile } from "react-device-detect"

const App = ({ setTheme, useTitle }) => {
    setTheme("luxury")

    return (
        <Router>
            <Navbar />
            <AnimatedRoutes useTitle={useTitle} />
            {isMobile ? <BottomNav /> : <Footer />}
        </Router>
    )
}

export default App
