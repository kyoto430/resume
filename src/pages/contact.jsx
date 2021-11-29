import React from 'react'

const Contact = () => {
  return (
    <>
      <header className="header">
        <h1 className="header-text font-monospace">Get In Touch</h1>
        <div className="container">
          <div className="d-flex justify-content-around flex-column m-1 align-items-center">
            <div className="m-2 ">
              <i className="bi bi-envelope"></i> nateriver345@gmail.com
            </div>
            <div className="m-2">
              <i className="bi bi-telephone"></i> +375336613974
            </div>
            <div className="m-2">
              <a href="https://github.com/kyoto430" className="social m-1">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://t.me/Kyoto430" className="social m-1">
                <i className="bi bi-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Contact
