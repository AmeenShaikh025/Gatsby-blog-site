import { Link } from 'gatsby'
import React from 'react'

const Menu = () => (
        <div style={{
            background: '#e5ebea',
            paddingTop: '10px',
        }}>
        
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly',
            marginBottom: 0,
        }}>
            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
            
        </div>
    )

export default Menu
