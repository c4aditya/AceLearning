const onlineAddmissionContoller = require("../model/onlneaddmission");
const nodemailer = require("nodemailer");

async function onlineAddmission(req, res) {
    try {
        // Destructuring
        const { firstName, lastName, fatherName, email, mobno, gender, course, qualification, address, pincode } = req.body;

        // Database me save karo
        const response = await onlineAddmissionContoller.create({
            firstName, lastName, fatherName, email, mobno, gender, course, qualification, address, pincode
        });

        // Nodemailer setup
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "singhas1418@gmail.com", // Aapka email
                pass: "ctlr sgfh mkae yfmd"  // Apna Gmail App Password
            }
        });

        // Email details
        const mailOptions = {
            from: "singhas1418@gmail.com",  // Sender email
            to: "singhas1418@gmail.com",    // Admin email
            subject: "New Online Admission Received",
            text: `New Online Admission Details:\n
                Name: ${firstName} ${lastName}\n
                Father's Name: ${fatherName}\n
                Email: ${email}\n
                Mobile No: ${mobno}\n
                Gender: ${gender}\n
                Course: ${course}\n
                Qualification: ${qualification}\n
                Address: ${address}, Pincode: ${pincode}`
        };

        // Email send karo
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
            message: "There was an error while saving the data to the database",
            error: error.message
        });
    }
}

module.exports = onlineAddmission;
