import React from 'react';
import { useState } from 'react';
import useFetchData from '../hooks/use-fetch-data';
import Filter from './ui/filter';
import ServiceHub from './feature/service-hub';
import './service-hub-main.css';
import NetworkLogo from '../assets/icons/network.png';
import Footer from './common/footer';
import addButton from '../assets/icons/add.png';
import Modal from './ui/modal';
// import AddFormTemplate from './ui/add-form-template';
// import useUploadData from '../hooks/use-upload-data';
import AddPlantWrapper from './feature/add-plant-form';

const ServiceHubMain = () => {
    const [selectedPlant, setSelectedPlant] = useState('nan');
    const { data: plants, loading: loadingPlants, error: errorPlants } = useFetchData('/api/v1/plant/metadata');
    const { data: plantData, loading: loadingServices, error: errorServices } = useFetchData(`/api/v1/plant/${selectedPlant}`);
    const [iframeUrl, setIframeUrl] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (loadingPlants || loadingServices) return <p>Loading...</p>;
    if (errorPlants || errorServices) return <p>Error loading data</p>;

    // const filteredServices = services.filter(service =>
    //     selectedPlant === '' || service.plant_id === selectedPlant
    // );

    const handleLinkClick = (url) => {
        setIframeUrl(url);
    };

    const clearLink = () => {
        setIframeUrl('')
    }

    const onSuccess = () => {
        console.log('Success')
        setIsModalOpen(false)
    }

    return (
        <div>
            <div className='header'>
                <h1>Welcome To WASTEANT Service Hub</h1>

                <div className='logo-section'>
                    <img src={NetworkLogo} alt="Button icon" className="logo-icon"/>
                </div>
            </div>
            
            <div className='filter-section'>
                <Filter
                    data={plants}
                    filter_value={selectedPlant}
                    onFilterChange={setSelectedPlant}
                />

                <div className='add-button' onClick={() => setIsModalOpen(true)}>
                    <img src={addButton} alt="Button icon" className="add-button-icon"/>
                    <span>Add new plant</span>

                </div>
            </div>

            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                children={
                    <AddPlantWrapper 
                        onSuccess={onSuccess}
                    />
                }
                >
            </Modal>

            <div className='main-container'>
                <div className='service-container'>
                    <ServiceHub 
                        data={plantData}
                        handleLinkClick={handleLinkClick}
                    />
                </div>

                <div className='iframe-container'>
                    {iframeUrl ? (
                        <div className='iframe-container-open'>
                            <div className='iframe-container-button'>
                                <button onClick={() => clearLink()}>clear</button>
                            </div>
                            <iframe src={iframeUrl} title="Service Content"></iframe>
                        </div>
                    ) : (
                        <span style={{ color: 'red', fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.2em'}}>no service was selected yet</span>
                    )
                    }
                    
                </div>
            </div>
            
            <div className='footer-section'>
                <Footer />
            </div>
        </div>
    );
}

export default ServiceHubMain;



{/* <MicroServiceHub 
    data={services}
/> */}