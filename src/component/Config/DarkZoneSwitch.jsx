import React from "react";
import { useDarkMode } from "./DarkZone";
import './DarkZoneSwitch.css'

const BotonDZ = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const handleToggle = () => {
        toggleDarkMode();
        document.documentElement.classList.toggle('dark', isDarkMode);
        document.documentElement.classList.toggle('light', !isDarkMode);
    };

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
