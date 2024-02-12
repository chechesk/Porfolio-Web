import React, { useEffect } from "react";
import { useDarkMode } from "./DarkModeContext";
import './DarkZoneSwitch.css'

const BotonDZ = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const handleToggle = () => {
        toggleDarkMode();
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.toggle('light');
        localStorage.setItem('isDarkMode', !isDarkMode ? 'dark' : 'light');
    };

    useEffect(() => {
        const storedMode = localStorage.getItem('isDarkMode') === 'dark';
        if (storedMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.add('light');
        }
    }, []);

    return (
        <div>
            <label className="ui-switch">
                <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={handleToggle}
                />
                <div className="slider">
                    <div className="circle"></div>
                </div>
            </label>
        </div>
    );
}

export default BotonDZ;
