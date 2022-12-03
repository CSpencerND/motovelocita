import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Velocita | ${title}`
    })
}

const setTheme = (theme) => {
    document.querySelector("html").setAttribute("data-theme", theme)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App setTheme={setTheme} useTitle={useTitle} />)
