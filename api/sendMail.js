const sendMail = async (firstName, lastName, email, phone, project) => {
    console.log([firstName, lastName, email, phone, project])

    const nodemailer = require("nodemailer")
    // const { google } = require("googleapis")
    const process = require("process")
    const dotenv = require("dotenv")
    dotenv.config()

    const USER = process.env.MAIL_USER
    const PASS = process.env.MAIL_PASS

    // const CLIENT_ID = process.env.CLIENT_ID
    // const CLIENT_SECRET = process.env.CLIENT_SECRET
    // const REDIRECT_URI = process.env.REDIRECT_URI
    // const REFRESH_TOKEN = process.env.REFRESH_TOKEN
    //
    // const oAuth2Client = new google.auth.OAuth2(
    //     CLIENT_ID,
    //     CLIENT_SECRET,
    //     REDIRECT_URI
    // )
    //
    // oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })
    //
    try {
        // const accessToken = await oAuth2Client.getAccessToken()
        const transport = nodemailer.createTransport({
            // service: "gmail",
            // auth: {
            //     type: "OAuth2",
            //     user: USER,
            //     clientId: CLIENT_ID,
            //     clientSecret: CLIENT_SECRET,
            //     refreshToken: REFRESH_TOKEN,
            //     accessToken: accessToken,
            // },

            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: USER,
                pass: PASS,
            },
        })

        const mailOptions = {
            from: "Velocita",
            to: "anal.beads.go.away@gmail.com",
            subject: "Veloctia Inquiry",
            text: `${project}\nphone: ${phone}`,
            html: `
            <p>${project}</p>
            <p>${firstName} ${lastName}</p>
            <p>Phone: ${phone}</p>
            <p>Email: ${email}</p>
            `,
        }

        await transport.sendMail(mailOptions)
    } catch (error) {
        return error
    }
}

module.exports = sendMail
