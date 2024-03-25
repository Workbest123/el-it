import React from 'react'
import './buy.css'
import LOGO from '../main/photo_2024-03-24_15-06-14.jpg'

export default function Job():React.JSX.Element {
    
    return (
        <><nav className="navbar">
            <a className="brand" href="/"><img src={LOGO} width="50" /></a>
            <ul>
                <li>
                    <a className="active" href="/buy">ЗАказать</a>
                </li>
            </ul>
        </nav><h1></h1></>
    )}