import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './header.css';

function Header() {
    return (
        <div>
            <p>
            <h1>Welcome to Zach's Website</h1>
            <h2>Please click on the link's below to learn more about me</h2>
            <nav>
                <Link to="/family">Family</Link>
                <Link to="/adventures">Adventures</Link>
                <Link to="/goals">Goals</Link>
            </nav>
            </p>
        </div>
    )
}

export default Header;