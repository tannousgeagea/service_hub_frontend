
import React from 'react';
import PropTypes from 'prop-types';
import './filter.css';

const Filter = ({ data, filter_value, onFilterChange }) => {
    return (
        <div className="filter-container">
            <label htmlFor="plant-select">Filter by Plant:</label>
            <select
                id="plant-select"
                value={filter_value}
                onChange={e => onFilterChange(e.target.value)}
            >
                <option value="">select plant_id</option>
                {data.map(item => (
                    <option key={item.plant_id} value={item.plant_id}>
                        {item.plant_name}
                    </option>
                ))}
            </select>
        </div>
    );
};

Filter.propTypes = {
    data: PropTypes.array.isRequired,
    filter_value: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default Filter;