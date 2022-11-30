import React from 'react'
import '../../css/header.css'

export default function Header() {
    return (
        <div>
            <div className="navbar">
                <a href="#">Home</a>
                <a href="#">Blogs</a>
                <a href="#">Rewards point</a>
                <a href="#" className="right">Contact us</a>
            </div>
        </div>
    )
}
