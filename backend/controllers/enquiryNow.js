const enquireNow = require("../model/enquiryNow");
const nodemailer = require("nodemailer");

// Database interaction
async function enquiryDetails(req, res) {
    try {
        const { firstName, lastName, email, number, gender, course, message } = req.body;

        // Create entry in the database
        const response = await enquireNow.create({ firstName, lastName, email, number, gender, course, message });

        // Nodemailer transporter setup
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "singhas1418@gmail.com", // Aapka email
                pass: "ctlr sgfh mkae yfmd"  // Apna Gmail App Password yaha dalein
            }
        });

        // 📩 Sirf admin ke liye email send hoga
        const mailOptions = {
            from: "singhas1418@gmail.com",  // Aapka email
            to: "singhas1418@gmail.com",    // Yaha bhi aapka email (jaha enquiry aayegi)
            subject: "New Enquiry Received",
            text: `You have received a new enquiry:\n
                Name: ${firstName} ${lastName}\n
                Email: ${email}\n
                Phone: ${number}\n
                Gender: ${gender}\n
                Course: ${course}\n
                Message: ${message}`
        };

        // Email bhejo
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error sending email:", error);
            } else {
                console.log("Email sent successfully:", info.response);
            }
        });

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

module.exports = enquiryDetails;
