import React from 'react'
import Photo from '../assets/01.jpg'

const About = () => {
  return (
    <>
      <main className="main">
        <div className="container mt-5 d-flex align-items-center justify-content-center">
          <img src={Photo} alt="ruslan" className="photo mb-3 mt-3" />
        </div>
        <div className="container">
          <div className="row mb-5">
            <div className="col-4 text-center">
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}
              >
                01
              </span>{' '}
              Who am I:
            </div>
            <div className="col-8">
              <div className="row">
                <p>
                  Hi, my name is Ruslan Prakapets and I am a Junior Front-End
                  Developer.{' '}
                </p>{' '}
                <p>I was born in Belarus, I live in Minsk.</p>
                <p>
                  Since 2018, I started learning how to layout websites. After a
                  while time I acquired new skills and started learning new
                  technologies JavaScript and React. In my projects I strive to
                  make clear and an accessible user interface.
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-4 text-center">
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}
              >
                02
              </span>{' '}
              My technologies:
            </div>
            <div className="col-8">
              <div className="d-flex justify-content-around flex-wrap">
                <a href="https://reactjs.org/" target="_blank">
                  {' '}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="50"
                    height="50"
                  />{' '}
                </a>{' '}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  rel="nofollow"
                >
                  {' '}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="50"
                    height="50"
                  />{' '}
                </a>
                <a href="https://www.w3.org/html/" rel="nofollow">
                  {' '}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="50"
                    height="50"
                  />{' '}
                </a>{' '}
                <a href="https://www.w3schools.com/css/" rel="nofollow">
                  {' '}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="50"
                    height="50"
                  />{' '}
                </a>{' '}
                <a href="https://sass-lang.com" rel="nofollow">
                  {' '}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                    alt="sass"
                    width="50"
                    height="50"
                  />{' '}
                </a>{' '}
                <a href="https://getbootstrap.com" rel="nofollow">
                  {' '}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                    alt="bootstrap"
                    width="50"
                    height="50"
                  />{' '}
                </a>
                <a href="https://firebase.google.com/" rel="nofollow">
                  {' '}
                  <img
                    src="https://camo.githubusercontent.com/dd4b2422ed3bfc9da88c43d18550375c66f9584327dff7ecc19315ce50b96f07/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667"
                    alt="firebase"
                    width="50"
                    height="50"
                    data-canonical-src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                  />{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
