import React, { useState } from 'react';
import AddFormTemplate from '../ui/add-form-template';
import useUploadData from '../../hooks/use-upload-data';

const AddPlantWrapper = ({ onSuccess }) => {
    const { uploadData, loading, error } = useUploadData('/api/v1/plant/add');

    const handleSubmit = async (plantData) => {
        try {
            const response = await uploadData(plantData);
            onSuccess(response); // Callback to notify success
        } catch (err) {
            console.error("Error uploading data:", err);
        }
    };

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading && <p style={{ color: 'green' }}>{'Loading ... ...'}</p>}
            <AddFormTemplate onSubmit={handleSubmit} loading={loading} />
        </div>
    );
};

export default AddPlantWrapper;
