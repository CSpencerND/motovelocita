const sendMail = async (name, email, phone, description) => {
    console.log([name, email, phone, description])

    const nodemailer = require("nodemailer")
    const process = require("process")
    const dotenv = require("dotenv")
    dotenv.config()

    const USER = process.env.MAIL_USER
    const PASS = process.env.MAIL_PASS

    try {
        const transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: USER,
                pass: PASS,
            },
        })

        const mailOptions = {
            from: "Velocita",
            to: "motovelocita@gmail.com",
            cc: `${email}`,
            subject: "Veloctia Inquiry",
            text: `${description}\nphone: ${phone}`,
            html: `
            <p>${description}</p>
            <p>${name}</p>
            <p>Phone: ${phone}</p>
            <p>Email: ${email}</p>
            `,
        }

        await transport.sendMail(mailOptions)
    } catch (err) {
        return await err
    }
}

module.exports = sendMail
