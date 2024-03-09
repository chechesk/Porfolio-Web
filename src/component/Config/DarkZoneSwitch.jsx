import React, { useEffect } from "react";
import { useDarkMode } from "./DarkZone";
import './DarkZoneSwitch.css'

const BotonDZ = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode(false);

    // Función para obtener el modo almacenado en localStorage
    const getStoredMode = () => {
        return localStorage.getItem('isDarkMode') === 'dark';
    }

    const handleToggle = () => {
        toggleDarkMode();
        document.documentElement.classList.toggle('dark', isDarkMode);
        document.documentElement.classList.toggle('light', !isDarkMode);

        // Al cambiar el modo, almacena el estado en localStorage
        localStorage.setItem('isDarkMode', isDarkMode ? 'dark' : 'light');
    };

    useEffect(() => {
        // Al cargar la página, recupera el estado desde localStorage y aplica los estilos
        const storedMode = getStoredMode();
        if (!storedMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.add('light');
        }
    }, []);

    return (
        <div>
            <label className="ui-switch ">
                <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={handleToggle}
                />
                <div className="slider mt-1">
                    <div className="circle"></div>
                </div>
            </label>
        </div>
    );
}

export default BotonDZ;
