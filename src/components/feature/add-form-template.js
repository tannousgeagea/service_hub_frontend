import React from 'react'
import TextLabel from '../ui/text-label'
import './add-form-template.css'
import submitIcon from '../../assets/icons/upload.png'

const AddFormTemplate = ({ entries }) => {
    return (
        <div className='form-container'>
            {entries.map((key, index) =>
                <div className='form-content'>
                    <TextLabel 
                        label={key}
                        placeholder={`Enter ${key} `}
                    />
                </div>
            )}
        
        <div className='form-submit'>
            <div className='form-submit-button'>
                <img src={submitIcon} alt="Button icon" className="form-submit-icon"/>
                <span>Submit</span>
            </div>
        </div>
        </div>
    )
}

export default AddFormTemplate