import  { useState } from 'react';

function RegistroForm() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    avatar: '',
    role: ''
  });
  const [alerta, setAlerta] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9999/back/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      if (response.ok) {
        // Si la respuesta es exitosa, puedes redirigir al usuario o realizar otras acciones
        console.log("Usuario registrado exitosamente");
        // Redirigir al usuario a otra página, por ejemplo:
        // history.push('/registroExitoso');
      } else if (response.status === 409) {
        // Si el correo electrónico ya está registrado, muestra una alerta al usuario
        setAlerta("El correo electrónico ya está registrado. Por favor, intenta con otro.");
      } else {
        throw new Error('Error en la respuesta del servidor');
      }
    })
    .catch((error) => {
      console.error("Error al enviar los datos del formulario:", error);
    });
  };

  return (
    <div>
      {alerta && <div className="alerta">{alerta}</div>}
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input 
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input 
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input 
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="avatar"
          placeholder="Avatar"
          value={formData.avatar}
          onChange={handleChange}
        />
        <select 
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="">Selecciona un rol</option>
          <option value="administrator">Administrador</option>
          <option value="supervisor">Supervisor</option>
          <option value="user">Usuario</option>
        </select>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegistroForm;
