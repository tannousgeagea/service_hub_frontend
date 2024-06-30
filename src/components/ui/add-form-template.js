import React from 'react'
import { useState } from 'react';
import TextLabel from './text-label'
import './add-form-template.css'
import submitIcon from '../../assets/icons/upload.png'

const AddFormTemplate = ({ onSubmit, loading }) => {

    const plant_keys = {
        'plant_id': '',
        'plant_name': '',
        'plant_location': '',
        'meta_info': '',
    }

    const [newPlantData, setNewPlantData] = useState(plant_keys)

    const handleChange = (name, value) => {
        setNewPlantData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(newPlantData);
    };

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            {Object.keys(newPlantData).map((key, index) =>
                <div className='form-content'>
                    <TextLabel 
                        key={key}
                        label={key.replace('_', ' ').toUpperCase()}
                        value={newPlantData[key]}
                        name={key}
                        onChange={handleChange}
                        placeholder={`Enter ${key} `}
                    />
                </div>
            )}
        
            <div className='form-submit'>
                <button type='submit' className='form-submit-button' disabled={loading}>
                    <img src={submitIcon} alt="Button icon" className="form-submit-icon"/>
                    <span>Submit</span>
                </button>
            </div>
        </form>
    )
}

export default AddFormTemplate