import React from 'react';
import './microservice-hub.css';
import infoButton from '../../assets/icons/information-button.png'

const MicroServiceHub = ({ data, onClick }) => {

    return (
        <div className="microservice-container">
            {data.map((item, index) => (
                <a href='#' onClick={() => onClick(item.url)} className="microservice-card-link " key={index}>
                    <div className="microservice-card" key={item.id}>
                        
                        <div className='microservice-info-section-container '>
                            <div className='info-section'>
                                <img src={infoButton} alt="Button icon" className="info-icon"/>
                                <div className="microservice-tooltip">
                                    <p className="service-id"><strong>ID:</strong> {item.id}</p>
                                    <p className="service-description"><strong>Description:</strong> {item.description}</p>
                                </div>
                            </div>
                        </div>

                        <h3>{item.name}</h3>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default MicroServiceHub;
