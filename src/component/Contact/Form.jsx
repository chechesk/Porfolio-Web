import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      message: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    // El código para enviar el correo electrónico

    try {
      // Envía el correo electrónico
      // ...
    } catch (error) {
      console.error('Error al enviar el correo electrónico', error);
    }
  };

  render() {
    const { t } = this.props;
    const { email, name, message } = this.state;

    return (
      <div className='contact'>
        <div className="form-container">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('Form:name')}</label>
              <input type="text" id="name" name="name" required value={name} onChange={(e) => this.setState({ name: e.target.value })} />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('Form:email')}</label>
              <input type="text" id="email" name="email" required value={email} onChange={(e) => this.setState({ email: e.target.value })} />
            </div>
            <div className="form-group">
              <label htmlFor="textarea">{t('Form:description')}</label>
              <textarea name="message" id="textarea" rows="10" cols="50" required value={message} onChange={(e) => this.setState({ message: e.target.value })}></textarea>
            </div>
            <button className="form-submit-btn" type="submit">{t('Form:submit')}</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Form);
