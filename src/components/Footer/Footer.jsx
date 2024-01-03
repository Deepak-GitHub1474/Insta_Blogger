import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-gray-700 text-white h-[10vh] flex items-center justify-center text-lg">
            <p>© All rights reserved || {year}</p>
        </footer>
    );
}

export default Footer;
