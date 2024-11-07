import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  const username = "";
  const password = "";
  const myEmail = "";
  // const formData = await request.formData();
  // const name = formData.get("name");
  // const email = formData.get("email");
  // const message = formData.get("message");

  //node mailer object

  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.de",
    port: 587,
    secure: false,
    auth: {
      user: "info@defeat-athletics.de",
      pass: "rahCip-tajxa9-huqnyg",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: "info@defeat-athletics.de",
      to: "info@defeat-athletics.de",
      replyTo: "containerkid@gmail.com",
      subject: `Neue Terminanfrage von ${username}`,
      html: `
        <h1>${username} hat dir eine Termin anfrage geschickt</h1>
        <p>Die Kund:in möchte gerne ein realistische Tatto auf der Brust</p>
        `,
    });
    return NextResponse.json({ message: "Mail erfolgreich versand!" });
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "Failed to send Mail" }, { status: 500 });
  }
}
