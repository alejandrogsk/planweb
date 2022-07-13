import nodemailer from "nodemailer";
export default async function sendForm(req, res) {
    try {
        const data = req.body;

        //PDF validation
        if (data.userPDF) {
            let extenstion = data.userPDF.split(".").reverse()[0];
            if (extenstion.toLowerCase() !== "pdf") {
                return res.status(400).json({
                    ok: false,
                    message: "El archivo debe ser PDF.",
                });
            }
        }

        let subject = "Ningun servicio especifico";
        //Subject from checkboxes validation
        if (data.services.length > 0) {
            subject = data.services.toString();
        }

        //Transporter creation
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.GMAIL_ACCOUNT_FOR_SERVER,
                pass: process.env.GMAIL_PASS_APPLICACION_WEB_NEXT_JS,
            },
            secure: true,
        });

        const mailData = {
            from: data.userEmail,
            to: process.env.GMAIL_RECEPTOR,
            subject: subject,
            text: `
            Nombre: ${data.userName} ${data.userLastName}. 
            Email: ${data.userEmail}. 
            Teléfono: ${data.userPhone}. 
            Empresa: ${data.userCompany}. 
            Localidad: ${data.userLocation}. 
            Mensaje: ${data.userMessage}
            
            `,
            // attachments: [
            //     {
            //         path: data.userPDF || ""
            //     }
            // ]
            //html: <div>{data.userMessage}</div>
        };
        await transporter.sendMail(mailData, function (err, info) {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    ok: false,
                    message:
                        "Lo sentimos hubo un problema. Contactenos por otro medio.",
                });
            } else {
                return res.status(200).json({
                    ok: true,
                    message:
                        "Enviado correctamente, nos pondremos en contacto con usted a la brevedad",
                });
            }
        });
    } catch (e) {
        console.log("Error en catch", e);
        return res.status(400).json({
            ok: true,
            message:
                "Lo sentimos hubo un problema. Contactenos por otro medio.",
        });
    }
}
