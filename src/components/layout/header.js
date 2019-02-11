import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header style={headerStyle}>
            <h1>Notes</h1>
            <Link style={linkStyle} to="/">Note List</Link> | 
            <Link style={linkStyle} to="/about"> About Page</Link>
         </header>
    )
}

const headerStyle = {
    background: '#0d0977',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;