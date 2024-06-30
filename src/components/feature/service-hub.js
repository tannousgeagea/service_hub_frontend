import React from 'react';
import { useState } from 'react';
import fetchData from '../api/fetch';
import MicroServiceHub from './microservice-hub';
import infoButton from '../../assets/icons/information-button.png'
import dropDown from '../../assets/icons/down-arrow.png'
import dropUp from '../../assets/icons/up-arrow.png'
import './service-hub.css';

const ServiceHub = ({ data , handleLinkClick }) => {
    const [isOpen, setIsOpen] = useState({});
    const [serviceDetails, setServiceDetails] = useState({});
    const services = data?.services || [];

    const toggleSection = async (serviceId) => {
        setIsOpen(prevIsOpen => ({
            ...prevIsOpen,
            [serviceId]: !prevIsOpen[serviceId]
        }));

        if (!serviceDetails[serviceId]) {
            const details = await fetchData(`/api/v1/service/${serviceId}`);
            setServiceDetails(prevDetails => ({
                ...prevDetails,
                [serviceId]: details
            }));
        }

    };

    return (
        <div className='main-container'>
            <div className="container">
                {services.length === 0 ? (
                    <span style={{ color: 'red', fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.2em'}}>Please select a plant ID</span>
                ) : (
                    <div className='container-header'>
                        <h3>Services Running at {data.plant_name}</h3>
                    </div>
                )}


                {/* {} */}
                {services.map((service) => (
                    <div key={service.service_id} className="service-section">

                        <div className='service-header'>
                            <div className='info-section-container'>
                                <div className='info-section'>
                                    <img src={infoButton} alt="Button icon" className="info-icon"/>
                                    <div className="tooltip">
                                        <p className="service-id"><strong>ID:</strong> {service.service_id}</p>
                                        <p className="service-description"><strong>Description:</strong> {service.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='section-header-title'>
                                <h3>{service.service_name}</h3>

                                <div className='drop-down-icon-section' onClick={() => toggleSection(service.service_id)}>
                                    {isOpen[service.service_id] ? (
                                        <img src={dropUp} alt="up arrow" className="drop-down-icon"/>
                                    ) : (
                                        <img src={dropDown} alt="down arrow" className="drop-down-icon"/>
                                    )}
                                </div>
                            </div>

                        </div>

                        <div className='service-content-container'>
                            {isOpen[service.service_id] && (
                                <div className='service-content'>
                                    {serviceDetails[service.service_id] ? (
                                        <MicroServiceHub 
                                            data={serviceDetails[service.service_id].services}
                                            onClick={handleLinkClick}
                                        />
                                    ) : (
                                        <p>Loading details...</p>
                                    )}
                                </div>
                            )
                            }
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default ServiceHub;