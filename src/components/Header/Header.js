import React from 'react';
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <span onClick={() => window.scroll(0, 0)} className="headerTitle">React & Material UI Movies App</span>
        </div>
    )
}

export default Header
