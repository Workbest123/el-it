import React from 'react'
import './contact.css'
import LOGO from '../main/photo_2024-03-24_15-06-14.jpg'

export default function Job():React.JSX.Element {
    
    return (
      <><nav className="navbar">
        <a className="brand" href="/"><img src={LOGO} width="50" /></a>
        <ul>
          <li>
            <a href="/contact">КОНТАКТЫ</a>
          </li>
        </ul>
      </nav><h1>Полное
        наименование
        Общество с ограниченной ответственностью "ЭЛ-АЙТИ компани"<br />
        Сокращенное
        наименование
        ООО "ЭЛ-АЙТИ компани"<br />
        Юридический адрес
        358000, г. Элиста, ул. Губаревича, д. 5, оф. 404<br />
        Почтовый адрес
        358000, г. Элиста, ул. Губаревича, д. 5, оф. 404<br />
        Телефон/факс
        +7 (966) 588-71-56<br />
        ИНН/КПП
        0800008094/080001001<br />
        ОГРН
        1027739642281<br />
        Расчетный счет в рублях
        40702810970010423438<br />
        Расчетный счет в юанях
        40702156470010007173<br />
        Корреспондентский счет
        30101810645250000092<br />
        БИК банка
        044525092<br />
        Банк
        Московский филиал АО КБ «Модульбанк»<br />
        Директор
        Манджиев Санчир Хечиевич, действует на основании Устава<br />
        E-mail
        El-itcompany@mail.ru</h1></>
    )}