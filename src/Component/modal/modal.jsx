import React, { useState } from 'react';
import './modal.css'; // Create this CSS file for styling

const Collapsible = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapsible = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapsible">
            <div className="collapsible-header" onClick={toggleCollapsible}>
                <h2>{title}</h2>
                <button className="collapsible-toggle">{isOpen ? '×' : '+'}</button>
            </div>
            {isOpen && (
                <div className="collapsible-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

export default Collapsible;
