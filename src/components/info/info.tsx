import React from 'react'
import './info.css'
import LOGO from '../main/photo_2024-03-24_15-06-14.jpg'

export default function Job():React.JSX.Element {
    
    return (
      <><nav className="navbar">
        <a className="brand" href="/"><img src={LOGO} width="50" /></a>
        <ul>
          <li>
            <a href="/info">Наши услуги</a>
          </li>
        </ul>
      </nav>
      <h1> Как мы работаем</h1>
      <div>
      <h2>Обработка полей</h2>
      <a>Обработка полей средствами химической защиты. Внесение агродронами гербицидов, пестицидов, инсектицидов. Распыление жидких удобрений по листу.</a>
      <h2>Десикация</h2>
      <a>Предуборочная десикация любых культур агродронами с отсутствием колейности.</a>
      <h2>Обработка садов и ягодников</h2>
      <a>Внесение гербицидов, инсектицидов, фунгицидов. Распыление агродронами жидких удобрений по листу.</a>
      <h2>Обработка лесов и курортных зон</h2>
      <a>Внесение дронами опрыскивателями инсектицидов, фунгицидов. Борьба с насекомыми (комары, клещи и т.д.).</a>
      <h2>Внесение дронами СЗР</h2>
      <a>Обработка довсходовыми и послевсходовыми гербицидами, фунгицидами и инсектицидами.</a>
      <h2> Внесение дронами удобрений</h2>
      <a>Опрыскивание по листу растворами жидких удобрений, гумматов, микроэлементов.</a></div>
      <h1>Преимущества работы с нами</h1>
      </>
    )}