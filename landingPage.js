const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "jamesbriandungu@gmail.com",
        pass: "vwnycgcxkyqqfeqq",
    },
});

app.post("/send-email", (req, res) => {
    const{email, message} = req.body;
    console.log("Email",email)
    console.log("message",message)


    const mailOptions = {
        from: email,
        to: "jamesbriandungu@gmail.com",
        subject: "New Contact form Submission",
        text: `Message from ${email}: \n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
           console.log("error sending mail ")
           console.log(error)
            res.status(500).json({
                message: "Error sending email"
            });
        }else{
console.log("Seneding mail successful")
            res.status(200).json({
                message: "Email sent successfully"
            });
        }
    });

    // app.listen(5000, () => console.log("server running on prt 5000"));
})
module.exports = app