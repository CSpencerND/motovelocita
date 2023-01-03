const express = require("express")
const process = require("process")
const dotenv = require("dotenv")
const cors = require("cors")
const sendMail = require("./sendMail")

const app = express()
dotenv.config()
// const PORT = process.env.PORT || 3001

app.use(
    cors({
        origin: [
            "https://motovelocita.com",
            "https://www.motovelocita.com",
            "https://motovelocita.com/*",
            "https://www.motovelocita.com/*",
            "https://www.motovelocita.com/contact",
            "https://motovelocita.com/contact",
            "https://motovelocita.vercel.app/contact",
        ],
    })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// test route
app.get("/test", (req, res) => {
    res.send("<h1>This is a test... Success!</h1>")
    console.log("Success!!!")
    console.log(req.body)
})

// send email
app.post("/send", (req, res) => {
    const { name, email, phone, description } = req.body
    const hasValues = Object.values(req.body).every((value) => value)

    if (hasValues) {
        sendMail(name, email, phone, description)
            .then(() => {
                console.log("Email sent")
                res.send()
            })
            .catch((error) => console.log(error.message))
    } else {
        console.log("Missing values")
        res.status(400).send()
    }
})

// 404
app.use((req, res) => {
    console.log(req.body)
    res.status(404).send(
        "<h1>Oops... The page you requested is in another castle!</h1>"
    )
})

// run server
// app.listen(PORT, () => {
//     console.log("listening for requests on port " + PORT)
// })

module.exports = app
