import React from 'react';
import './header.css';
import Filter from '../filterbar/filterbar';

const Header = ({ headerTitle, categories, selectedCategory, setSelectedCategory }) => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">{headerTitle}</div>
                <Filter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
            </div>
        </header>
    );
};

export default Header;
