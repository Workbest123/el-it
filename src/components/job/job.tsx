import React from 'react'
import './job.css'
import LOGO from '../main/photo_2024-03-24_15-06-14.jpg'
import FOTO from './img_avatar.png'

export default function Job():React.JSX.Element {
    
    return (
      <><nav className="navbar">
        <a className="brand" href="/"><img src={LOGO} width="50" /></a>
        <ul>
          <li>
            <a href="/job">ВАКАНСИИ</a>
          </li>
        </ul>
      </nav>
      <div className="card">
          <img src={FOTO} alt="Avatar" />
            <div className="container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
            <img src={FOTO} alt="Avatar" />
            <div className="container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </div>
          </>
    )}