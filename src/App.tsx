import QrCode from './assets/qr-code.png'
import AirPlane from './assets/icon_airplane.svg'
import IconBrasil from './assets/icon_brasil.png'
import Figma from './assets/icon_figma.svg'
import { LanguageBRA, LanguageEUA, Country } from './enum'
import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState(Country.BRA)

  const arry_country = [Country.BRA, Country.EUA]

  const Language = language === 'BRA' ? LanguageBRA : LanguageEUA

  return (
    <div id="boarding-pass background-theme">
      <header className="grid column">
        <h1>{Language.title}</h1>
        <div className="select-language">
          <select name="select" onChange={(e) => setLanguage(e.target.value as Country)}>
            {arry_country.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </header>

      <main id="ticket">
        <section className="top grid">
          <div className="flight grid column">
            <div className="number">
              <p> {Language.flight} </p>
              <strong>RS995</strong>
            </div>
            <div className="date text-right">
              <p> {Language.date} </p>
              <strong>23/05/2023</strong>
            </div>
          </div>

          <div className="grid column">
            <div className="departure grid">
              <p>São Paulo, Brasil</p>
              <strong>GRU</strong>
              <time>17:00</time>
            </div>
            <div className="airplane grid">
              <img src={AirPlane} alt="img airPlane" />
            </div>
            <div className="arrival text-right grid">
              <p>São Francisco, EUA</p>
              <strong>SFO</strong>
              <time>
                04:48 <sup>+1</sup>
              </time>
            </div>
          </div>
        </section>
        <section className="middle grid column">
          <div className="name">
            <p> {Language.passengers} </p>
            <strong>Gleyson Silva</strong>
          </div>
          <div className="seat text-right">
            <p> {Language.seats} </p>
            <strong>28A</strong>
          </div>
        </section>
        <section className="bottom">
          <div className="container grid column">
            <dl className="grid">
              <dt>
                <p> {Language.boarding}</p>
                <time>16:15</time>
              </dt>
              <dt>
                <p> {Language.terminal}</p>
                <strong>2</strong>
              </dt>
              <dt>
                <p> {Language.gate}</p>
                <strong>15</strong>
              </dt>
            </dl>
            <div className="qrcode grid">
              <img src={QrCode} alt="img Qrcode" />
              <p>{Language.boarding_group}: 3</p>
            </div>
          </div>
          <p>
            <strong> {Language.caution}:</strong> {Language.close_gate} 16:45
          </p>
        </section>
      </main>
      <footer>
        <div className="">
          <span> {Language.infor}</span>

          <div className="card-link">
            <svg width="25" height="25" viewBox="0 0 128 128">
              <path
                fill="#fff"
                d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
              ></path>
            </svg>

            <svg width="25" height="25" viewBox="0 0 128 128">
              <path
                fill="#fff"
                d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
              ></path>
              <path
                fill="#0076b2"
                d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
              ></path>
            </svg>

            <svg width="25" height="25" viewBox="0 0 128 128">
              <g fill="#181616">
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                ></path>
                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </g>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
// https://www.figma.com/file/0FBaxjPZqgHEYViAfPFrWt/%23boraCodar---Desafio-6-(Community)?node-id=1%3A7&t=xV4fn0ncAS5Vrzng-0
