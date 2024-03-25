import React from 'react'
import './main.css'
import LOGO from './photo_2024-03-24_15-06-14.jpg'
import VIDEO from './pinwheel_-_11051 (720p).mp4'


export default function Main():React.JSX.Element {
    
  return (
    <><nav className="navbar">
      <a className="brand" href="/"><img src={LOGO} width="50" /></a>
      <ul>
        <li>
          <a href="/contact">Контакты</a>
        </li>
        <li>
          <a href="/buy">Оставить заявку</a>
        </li>
        <li>
          <a href="/job">Вакансии</a>
        </li>
        <li>
          <a href="/info">Наши услуги</a>
        </li>
      </ul>
    </nav><div>
        <iframe width="1280" height="720" autoPlay muted loop
          src={VIDEO}/>
      </div></>
  )
}