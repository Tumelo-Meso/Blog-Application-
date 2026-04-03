import crypto from "crypto";

export function passwordStrength(password) {
        let score = 0;

        // Length check
        if (password.length >= 8) score++;

        // Uppercase letter check
        if (/[A-Z]/.test(password)) score++;

        // Lowercase letter check
        if (/[a-z]/.test(password)) score++;

        // Number check
        if (/[0-9]/.test(password)) score++;

        // Special character check
        if (/[^A-Za-z0-9]/.test(password)) score++;


       
        if(score >4){
            return true
        }else{
            return false
        }
    }


export function generateOTP() {

     return crypto.randomInt(100000, 999999).toString();
    
}