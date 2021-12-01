import React from 'react'
import { Link } from 'react-router-dom'
import Social from '../../common/social'

const NavBar = () => {
  const isNav = true
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black text-uppercase sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="navbar-brand" to="/main">
            Ruslan Prakapets
          </Link>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center mt-2">
              <li className="nav-item m-2">
                <Link
                  className="nav-link p-2"
                  aria-current="page"
                  to="/projects"
                >
                  Мои проекты
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link className="nav-link p-2" to="/about">
                  Обо мне
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-2" to="/contact">
                  Контакты
                </Link>
              </li>
              <Social nav={isNav} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
