import React from 'react';

const Navbar = () => {
    return (
          <nav>
            This Is Navbar
            <ul className="navbar-links" style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;