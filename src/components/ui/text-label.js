import React from "react";
import './text-label.css'

const TextLabel = ({ label, name, placeholder, value, onChange }) => {
    return (
        <div className="text-label">
            <label for='label'>{label}</label>
            <input 
                type="text" 
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.name, e.target.value)}
                placeholder={placeholder}
                required
            />
        </div>
    )
}

export default TextLabel