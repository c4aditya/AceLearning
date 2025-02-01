const contact = require("../model/contactus");
const nodemailer = require("nodemailer");

async function contactUs(req, res) {
    try {
        const { name, email, subject, phoneno, message } = req.body;

        const response = await contact.create({ name, email, subject, phoneno, message });

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "singhas1418@gmail.com",
                pass: "ctlr sgfh mkae yfmd",
            }
        });

        const mailOptions = {
            from: "singhas1418@gmail.com",
            to: "singhas1418@gmail.com",
            subject: `New Contact Request: ${subject}`,
            text: `You have received a new contact request:\n
                Name: ${name}
                Email: ${email}
                Phone: ${phoneno}
                Subject: ${subject}
                Message: ${message}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            data: response,
            message: "Entry is created in the database and email sent!"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
module.exports = contactUs;
