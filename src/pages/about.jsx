import React from 'react'
import Photo from '../assets/01.jpg'

const About = () => {
  return (
    <>
      <header className="header">
        <h1 className="header-text font-monospace mt-5">About Me</h1>
        <p>I love Design, Technology, and Story.</p>
        <div className="col-12 container text-center">
          <img src={Photo} alt="photo" className="w-50" />
        </div>
        <div class="container">
          <div class="row mb-5">
            <div class="col-4">01 WHO I AM:</div>
            <div class="col-8">
              <div className="row">Ruslan</div>
              <div className="row">
                1992年、沖縄県生まれ。大学を卒業後、県内の制作会社でDTPオペレーターとして就職後、大手紳士服量販店を中心に十数社のコーポレートサイトの運用業務を担当しました。
                2017年より、個人でもWebデザイナーとしての活動を開始し、写真撮影・デザイン・コーディングまでワンストップで対応しています。
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-4">02 SKILL SET:</div>
            <div className="col-8">
              <div className="d-flex justify-content-around">
                <a href="https://reactjs.org/" target="_blank">
                  {' '}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="40"
                    height="40"
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
                    width="40"
                    height="40"
                  />{' '}
                </a>
                <a href="https://www.w3.org/html/" rel="nofollow">
                  {' '}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="40"
                    height="40"
                  />{' '}
                </a>{' '}
                <a href="https://www.w3schools.com/css/" rel="nofollow">
                  {' '}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="40"
                    height="40"
                  />{' '}
                </a>{' '}
                <a href="https://sass-lang.com" rel="nofollow">
                  {' '}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                    alt="sass"
                    width="40"
                    height="40"
                  />{' '}
                </a>{' '}
                <a href="https://getbootstrap.com" rel="nofollow">
                  {' '}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                    alt="bootstrap"
                    width="40"
                    height="40"
                  />{' '}
                </a>
                <a href="https://webpack.js.org" rel="nofollow">
                  {' '}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                    alt="webpack"
                    width="40"
                    height="40"
                  />{' '}
                </a>
                <a href="https://firebase.google.com/" rel="nofollow">
                  {' '}
                  <img
                    src="https://camo.githubusercontent.com/dd4b2422ed3bfc9da88c43d18550375c66f9584327dff7ecc19315ce50b96f07/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667"
                    alt="firebase"
                    width="40"
                    height="40"
                    data-canonical-src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                  />{' '}
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div className="col-4">03 PERSONAL CONTACT:</div>
            <div className="col-8">
              <div>
                <i className="bi bi-envelope"></i> nateriver345@gmail.com{' '}
                <i className="bi bi-telephone"></i> +375336613974
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </header>
    </>
  )
}

export default About
