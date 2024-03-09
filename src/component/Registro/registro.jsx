import React, { useState } from 'react';

export default function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar la validación de los datos del formulario y enviarlos al servidor para el registro
        console.log('Datos del formulario:', formData);
        // Luego puedes enviar formData al servidor para el registro
    };

    return (
        <div>
            <p>Register</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />
                </div>
                <div>
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /><br />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label><br />
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required /><br />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}