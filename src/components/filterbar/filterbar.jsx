import React, { useState } from 'react';
import './filterbar.css';
import { FiFilter } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';
import { FILTER_CONSTANTS } from '../../utils/constants/globalConstants';

const FilterDropdown = ({ categories, selectedCategory, onSelectCategory }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="filter-dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className="filter-button">
                <FiFilter className="icon" />
                <span>{FILTER_CONSTANTS.FILTER_LABEL}</span>
                <FaChevronDown className="icon arrow" />
            </button>

            {isOpen && (
                <div className="dropdown-menu">
                    {['all', ...categories].map((category, index) => (
                        <label key={index} className="dropdown-option">
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                checked={selectedCategory === category}
                                onChange={(e) =>
                                    onSelectCategory(e.target.value)
                                }
                            />
                            {category}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;
