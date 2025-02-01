const courseDetails = require("../model/courseDetails");
const nodemailer = require("nodemailer");

// Database interaction + Email sending
async function createcourseDetails(req, res) {
    try {
        // Destructuring
        const { fullName, fatherName, email, mobileno, altno, dateTime, gender, qualification, aadhaarNo, course, houseNo, city, locality, state, pincode, District } = req.body;

        // Database me save karo
        const response = await courseDetails.create({
            fullName, fatherName, email, mobileno, altno, dateTime, gender, qualification,
            aadhaarNo, course, houseNo, city, locality, state, pincode, District
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
            subject: "New Course Application Received",
            text: `New Course Application Details:\n
                Name: ${fullName}\n
                Father's Name: ${fatherName}\n
                Email: ${email}\n
                Mobile No: ${mobileno}\n
                Alternate No: ${altno}\n
                Date & Time: ${dateTime}\n
                Gender: ${gender}\n
                Qualification: ${qualification}\n
                Aadhaar No: ${aadhaarNo}\n
                Course: ${course}\n
                Address: ${houseNo}, ${locality}, ${city}, ${District}, ${state} - ${pincode}`
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

module.exports = createcourseDetails;
