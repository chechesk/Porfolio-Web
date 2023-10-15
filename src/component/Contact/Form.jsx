import React, { useState } from "react";
import './Form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const smtpServer = 'mail.cyberzon3.com'; // Puerto SMTP
    const smtpPort = 465;
    const username = 'contact@cyberzon3.com'; // nombre de usuario igual al correo
    const password = 'CGSevent2023'; // contraseña del correo registrado en la web

    // Configuración del transporter de Nodemailer
    const transporter = nodemailer.createTransport({
      host: smtpServer,
      port: smtpPort,
      secure: true, // uso de SSL puerto 465
      auth: {
        user: username,
        pass: password,
      },
    });

    const emailData = {
      from: username,
      to: 'contact@cyberzon3.com', // Correo donde llegará el contacto
      subject: 'Contacto Web',
      text: `Correo del usuario: ${email}\nMensaje: ${message}`,
    };

    try {
      // Envía el correo electrónico
      const info = await transporter.sendMail(emailData);
      console.log('Correo electrónico enviado con éxito:', info.messageId);
    } catch (error) {
      console.error('Error al enviar el correo electrónico', error);
    }
  };

  return (
    <div className='contact'>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea name="message" id="textarea" rows="10" cols="50" required value={message} onChange={(e) => setMessage(e.target.valuelue)}></textarea>
          </div>
          <button className="form-submit-btn" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
