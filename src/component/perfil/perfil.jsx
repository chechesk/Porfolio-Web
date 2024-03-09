import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import RegistroForm from '../Dashboard/RegisterDb';
// eslint-disable-next-line no-unused-vars
import ListaUsuarios from '../Dashboard/ListUser';

const Perfil = () => {
    const [userData, setUserData] = useState(null);

    const handleLogout = () => {
        // Limpiar el localStorage
        localStorage.clear();
        // Redirigir a la página de inicio de sesión u otra página necesaria
        window.location.href = '/login'; // Redirige a la página de inicio de sesión
      };

    useEffect(() => {
        // Obtener los datos del usuario del localStorage
        const userDataString = localStorage.getItem('userData');

        if (userDataString) {
            // Convertir los datos del usuario de cadena a objeto JSON
            const userDataObj = JSON.parse(userDataString);

            // Realizar la solicitud para obtener los datos del usuario
            fetch(`http://localhost:9999/back/api/user/${userDataObj.id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${userDataObj.token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                // Actualizar el estado con los datos del usuario
                setUserData(data);
            })
            .catch(error => {
                console.error('Error al obtener la información del usuario:', error);
            });
        }
    }, []); // No necesitamos ninguna dependencia aquí, ya que solo queremos ejecutar esto una vez al cargar el componente

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
            {userData && (
                <div className="border border-gray-200 p-4 rounded-lg">
                    <img src={userData.avatar} alt="Avatar" className="rounded-full h-20 w-20 mb-4" />
                    <p><strong>Nombre:</strong> {userData.name}</p>
                    <p><strong>Apellido:</strong> {userData.lastname}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Rol:</strong> {userData.role}</p>
                    <p><strong>ID:</strong> {userData.id}</p>
                    <button onClick={handleLogout}>Desconectar</button>
                </div>
            )}
            <ListaUsuarios/>
            <RegistroForm/>
        </div>
    );
}

export default Perfil;
