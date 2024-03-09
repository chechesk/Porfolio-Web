import{ useState, useEffect } from 'react';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [editandoUsuario, setEditandoUsuario] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9999/back/api/user")
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de usuarios:", error);
      });
  }, []);

  const handleEditar = (usuario) => {
    setEditandoUsuario(usuario);
  };

  const handleGuardarCambios = () => {
    fetch(`http://localhost:9999/back/api/user/${editandoUsuario.id}`, {
      method: 'PUT', // O 'PUT' si prefieres
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editandoUsuario),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al guardar los cambios');
        }
        // Aquí podrías manejar la respuesta del servidor si es necesario
        // Por ejemplo, actualizar el estado local con los datos actualizados del servidor
        setEditandoUsuario(null);
      })
      .catch(error => {
        console.error('Error al guardar los cambios:', error);
      });
  };

  const handleEliminar = (usuarioId) => {
    fetch(`http://localhost:9999/back/api/user/${usuarioId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al eliminar el usuario');
        }
        // Eliminar el usuario de la lista después de la confirmación exitosa
        setUsuarios(usuarios.filter(usuario => usuario.id !== usuarioId));
      })
      .catch(error => {
        console.error('Error al eliminar el usuario:', error);
      });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditandoUsuario(prevUsuario => ({
      ...prevUsuario,
      [name]: value
    }));
  };
  return (
    <div>
      <h2>Lista de usuarios registrados:</h2>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td><img src={usuario.avatar} alt="Avatar" className="rounded-full h-20 w-20 mb-4" /></td>
              <td className='text-black'>{editandoUsuario === usuario ? <input value={usuario.name} onChange={(e) => usuario.name = e.target.value} /> : usuario.name}</td>
              <td className='text-black'>{editandoUsuario === usuario ? <input value={usuario.lastname} onChange={(e) => usuario.lastname = e.target.value} /> : usuario.lastname}</td>
              <td className='text-black'>{editandoUsuario === usuario ? <input value={usuario.email} onChange={(e) => usuario.email = e.target.value} /> : usuario.email}</td>
              <td className='text-black'>
                {editandoUsuario === usuario ? (
                  <select name="role" value={editandoUsuario.role} onChange={handleInputChange}>
                    <option value="usuario">Usuario</option>
                    <option value="supervisor">Supervisor</option>
                    <option value="administrador">Administrador</option>
                  </select>
                ) : (
                  usuario.role
                )}
              </td>
              <td className='text-black'>
                {editandoUsuario === usuario ? (
                  <button onClick={handleGuardarCambios}>Guardar</button>
                ) : (
                  <><button onClick={() => handleEditar(usuario)}>Editar</button><button onClick={() => handleEliminar(usuario.id)}>Eliminar</button></>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaUsuarios;
