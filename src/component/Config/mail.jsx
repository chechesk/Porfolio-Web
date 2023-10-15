import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import img from '../../assets/1684808450050.jpeg';
import './Contact.css';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fromEmail = 'correo@correo.com'; // Direccion de correo
    const smtpServer = 'mail.correo.com'; // Puerto SMTP
    const smtpPort = 465;
    const username = 'correo@correo.com'; // nombre de usuario igual a correo
    const password = 'tu-correo'; // contraseña del correo registrado en la web

    const emailData = {
      from: fromEmail,
      to: 'correo@correo.com', // correo donde llegará el contacto
      subject: 'Contacto Web', // Asunto que recibirá el correo
      text: `Correo del usuario: ${email}\nMensaje: ${message}`,
    };

    const data = {
      host: smtpServer,
      port: smtpPort,
      username: username,
      password: password,
      secure: true, // uso de SSL puerto 465
      auth: {
        user: username,
        pass: password,
      },
    };

    // You need to handle email sending logic here using nodemailer

    try {
      // Implement your email sending logic here
      // For example, you can use async/await with nodemailer

      // After sending email successfully, you can show an alert or redirect the user
      alert('Correo enviado con éxito');
    } catch (error) {
      alert('Hubo un error al enviar el correo');
    }
  }

  return (
    <div className='contact'>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Company Email</label>
            <input type="text" id="email" name="email" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea name="textarea" id="textarea" rows="10" cols="50" required="" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <button className="form-submit-btn" type="submit">Submit</button>
        </form>
      </div>
      <div className="card">
        <div className="img">
          <img
            className='img'
            src={img}
            alt='avatar'
          />
        </div>
        <span>{t('Contact:title')}</span>
        <p className="info">{t('Contact:descripcion')}</p>
        <div className="share">
          {/* Add your social media links */}
        </div>
        <button>Resume</button>
      </div>
    </div>
  );
}

export default withTranslation()(ContactForm);
