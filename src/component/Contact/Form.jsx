import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import * as Yup from "yup";
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      message: '',
      errors: {},
    };
    this.validationSchema = Yup.object().shape({
      name: Yup.string().required('El nombre es obligatorio'),
      email: Yup.string()
        .email('Correo electrónico no válido')
        .required('El correo electrónico es obligatorio'),
      message: Yup.string().required('El mensaje es obligatorio'),
    });
  }


  handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, message } = this.state;
  
    try {
      // Realiza la validación utilizando this.validationSchema
      await this.validationSchema.validate({ name, email, message }, { abortEarly: false });
  
      // Continúa con el código de envío de correo electrónico si la validación es exitosa
      // ...
  
      // Limpia los errores si todo va bien
      this.setState({ errors: {} });
  
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
  
      // Actualiza el estado con los errores de validación
      this.setState({ errors: validationErrors });
  
      // Maneja otros errores aquí
      console.error('Error al enviar el correo electrónico', error);
    }
  };
  
  

  render() {
    const { t } = this.props;
    const { email, name, message,errors  } = this.state;

    return (
      <div className='contact'>
      <div className="form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t('Form:name')}</label>
            <input type="text" id="name" name="name" required value={name} onChange={(e) => this.setState({ name: e.target.value })} />
            <p className="error-message">{errors.name}</p> {/* Muestra errores de validación */}
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('Form:email')}</label>
            <input type="text" id="email" name="email" required value={email} onChange={(e) => this.setState({ email: e.target.value })} />
            <p className="error-message">{errors.email}</p> {/* Muestra errores de validación */}
          </div>
          <div className="form-group">
            <label htmlFor="textarea">{t('Form:description')}</label>
            <textarea name="message" id="textarea" rows="10" cols="50" required value={message} onChange={(e) => this.setState({ message: e.target.value })}></textarea>
            <p className="error-message">{errors.message}</p> {/* Muestra errores de validación */}
          </div>
          <button className="form-submit-btn" type="submit">{t('Form:submit')}</button>
        </form>
      </div>
    </div>
    );
  }
}

export default withTranslation()(Form);
