import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
         user:process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})
export async function sendEmailOTP(email, OTP){
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "OTP Verification Code",
        html:
        `
            <p> ${OTP} </p>
        `
        
    }
    

    await transporter.sendMail(mailOptions)
}