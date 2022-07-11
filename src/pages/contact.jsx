import React from 'react'
import Social from '../components/common/social'

const Contact = () => {
  const isNav = false
  return (
    <>
      <header className="header">
        <h1 className="header-text font-monospace">Связаться со мной</h1>
        <div className="container">
          <div className="d-flex justify-content-around flex-column m-1 align-items-center">
            <div className="m-2 ">
              <i className="bi bi-envelope"></i>{' '}
              <a href="mailto:nateriver345@gmail.com" className="text-light">
                nateriver345@gmail.com
              </a>
            </div>
            <div className="m-2">
              <i className="bi bi-telephone"></i>
              <a href="tel:+375336613974" className="text-light">
                +375336613974
              </a>
            </div>
            <Social nav={isNav} />
          </div>
        </div>
      </header>
    </>
  )
}

export default Contact
