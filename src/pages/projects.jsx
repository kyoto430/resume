import React from 'react'
import Image1 from '../assets/project_1/01-min.png'
import Image2 from '../assets/project_1/02-min.png'
import Image3 from '../assets/project_1/03-min.png'
import Image4 from '../assets/project_1/04-min.png'
import Image5 from '../assets/project_1/05-min.png'

const Projects = () => {
  return (
    <>
      <main className="main">
        <div className="col-12 container m-1">
          <div className="container mb-5 mt-5">
            <div className="row">
              <div className="wrapper">
                {' '}
                <div className="d-flex justify-content-between flex-column m-1">
                  <div>
                    <h5>Проект</h5>
                    <p>
                      <i className="bi bi-arrow-right text-info"></i>
                      Хакатон
                    </p>
                  </div>
                  <div>
                    <h5>Задание</h5>
                    <p className="bg-black p-2">
                      <i className="bi bi-arrow-right text-info"></i>
                      Разработать классный сайт на React, который будет
                      презентовать команду. На нём креативно рассказать о своей
                      команде в целом и о каждом участнике отдельно. Любые
                      улучшения приветствуются, но необходимо сохранить
                      минимальный базовый функционал, который описан в
                      техническом задании.
                    </p>
                  </div>
                  <div>
                    <h5>Задачи на проекте</h5>
                    <p className="bg-black p-2">
                      <i className="bi bi-arrow-right text-info"></i>
                      Разработка компонента карточек команды, компонент progress
                      bar
                    </p>
                  </div>
                  <div>
                    <h5>Результат</h5>
                    <i className="bi bi-arrow-right text-info"> </i>
                    <a
                      target="_blank"
                      href="https://orlovaleksandr89.github.io/hakaton/#/hakaton"
                      style={{
                        color: '#fff',
                      }}
                    >
                      <span>LINK</span>
                    </a>
                  </div>
                  <div className="m-3 text-center">
                    <img src={Image2} alt="table" className="w-75 mt-1" />
                    <img src={Image1} alt="mobile" className="w-50 m-1" />
                  </div>
                </div>
              </div>
              <div className="wrapper">
                <div className="d-flex justify-content-around flex-wrap m-1">
                  <img src={Image5} alt="pc-3" className="w-50 mb-1" />
                  <img src={Image4} alt="pc" className="w-75 m-1" />
                  <img src={Image3} alt="pc-2" className="w-75 mb-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Projects
