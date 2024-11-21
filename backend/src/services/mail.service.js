import nodemailer from "nodemailer";
import "dotenv/config";
import { token } from "morgan";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (email, token) => {
  transporter.sendMail({
    from: "Tu Pueblo Ideal <noreply.tupuebloideal@gmail.com>",
    to: email,
    subject: "Verifica tu correo",
    text: "Hola " + email + ", por favor verifica tu cuenta",
    html: createVerificationMail(token),
  });
};

export const createVerificationMail = (token) => {
  return `
    <html>
      <head>
        <title>Verifica tu cuenta</title>
      </head>
      <body>
        <h1>Verifica tu cuenta</h1>
        <p>Hola, por favor verifica tu cuenta</p>
        <p><a href="http://localhost:4000/verify/${token}">Click aquí</a></p>
        <p>Tu Pueblo Ideal</p>
      </body>
    </html>
  `;
};
