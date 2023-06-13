import nodemailer from "nodemailer";

export const emailRegister = async (data) => {
  const { email, name, token } = data;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Información del email

  const info = await transport.sendMail({
    from: '"AM Deluxy Software Development" <amdeluxy@gmail.com>',
    to: email,
    subject: "AM Deluxy - Check your Account",
    text: "Check your Account on AM Deluxy",
    html: `<p>Hello: ${name} Check your Account on AM Deluxy</p>
    <p>Your account is almost ready, you just need to verify it using the following link: 

    <a href="${process.env.FRONTEND_URL}/confirmed/${token}">Check your Account</a>
    
    <p>If you didn't create this account, you can ignore this message.</p>
    
    
    `,
  });
};

export const emailForgetPassword = async (data) => {
  const { email, name, token } = data;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Información del email

  const info = await transport.sendMail({
    from: '"AM Deluxy - Software Development" <amdeluxy@gmail.com>',
    to: email,
    subject: "AM Deluxy - Reset your Password",
    text: "Reset your  Password",
    html: `<p>Hello: ${name} You have requested to reset your password</p>

    <p>Please follow the link below to generate a new password.: 

    <a href="${process.env.FRONTEND_URL}/forget-password/${token}">Reset your Password</a>
    
    <p>If you didn't request this email, you can ignore this message</p>
    
    
    `,
  });
};
