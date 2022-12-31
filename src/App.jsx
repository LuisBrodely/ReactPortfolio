
import "./assets/nav.css"
import "./assets/menu.css"
import './App.css'
import {useState} from "react";

function App() {

    const [abrir,setAbrir] = useState(false)

  return (
    <div className="App">
      <div className="header">
          <nav className="nav container">
              <a href="" className="nav__logo">
                  <i className="uil uil-behance"></i>
              </a>

              <div className={`nav__menu ${abrir?"show-menu" : ""}`}>
                  <ul className="nav__list grid">
                      <li className="nav__item">
                          <a href="" className="nav__link">
                              <i className="uil uil-estate nav__icon"></i>Inicio
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="" className="nav__link">
                              <i className="uil uil-user nav__icon"></i>Sobre mi
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="" className="nav__link">
                              <i className="uil uil-briefcase-alt nav__icon"></i>Proyectos
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="" className="nav__link">
                              <i className="uil uil-message nav__icon"></i>Contacto
                          </a>
                      </li>
                      <li className="nav__item">
                          <a href="" className="nav__link">
                              <h2>Curriculum</h2>
                          </a>
                      </li>
                  </ul>
              </div>
              <label htmlFor="check" className="menuButton">
                  <input id="check" type="checkbox" className="nav__close" onClick={()=>{setAbrir(!abrir)}}/>
                      <span className="top"></span>
                      <span className="mid"></span>
                      <span className="bot"></span>
              </label>
          </nav>
      </div>

    </div>
  )
}

export default App
