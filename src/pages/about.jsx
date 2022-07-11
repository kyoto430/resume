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
              </span>
              Кто я:
            </div>
            <div className="col-8">
              <div className="row">
                <p>
                  Привет, меня зовут Руслан Прокопец. Я родился в Беларуси, живу
                  в г.Минске.
                </p>
                <div>
                  <p>
                    В 2018 году, я начал изучать верстку веб-сайтов. Со временем
                    я приобрел новые навыки и начал изучать новые технологии
                    JavaScript и React.
                  </p>
                  <p>01.03.2022 окончил курс Junior Frontend Developer.</p>
                  <p>
                    В своих проектах я стремлюсь сделать понятный и доступный
                    пользовательский интерфейс.
                  </p>
                </div>
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
              Мои технологии:
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
                <a href="https://github.com/" rel="nofollow">
                  {' '}
                  <img
                    src="https://www.svgrepo.com/show/303615/github-icon-1-logo.svg"
                    alt="git"
                    width="50"
                    height="50"
                  />{' '}
                </a>
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
                03
              </span>{' '}
              Базовые знания:
            </div>
            <div className="col-8">
              <div className="d-flex justify-content-around flex-wrap">
                <a href="https://redux.js.org/" target="_blank">
                  {' '}
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
                    alt="redux"
                    width="50"
                    height="50"
                  />{' '}
                </a>{' '}
                <a href="https://nodejs.org/en/" rel="nofollow">
                  {' '}
                  <img
                    src="https://nodejs.org/static/images/logo.svg"
                    alt="nodeJS"
                    width="50"
                    height="50"
                  />{' '}
                </a>
                <a href="https://www.mongodb.com/" rel="nofollow">
                  {' '}
                  <img
                    src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
                    alt="MongoDB"
                    width="50"
                    height="50"
                  />
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
