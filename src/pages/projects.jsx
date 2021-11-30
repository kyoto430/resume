import React from 'react'
import PC from '../assets/project_1/01.png'
import Mobile from '../assets/project_1/02.png'
import Table from '../assets/project_1/03.png'

const Projects = () => {
  return (
    <>
      <main className="main">
        <div className="col-12 container text-left m-1">
          <h1>Проект 1</h1>
          <div className="container mb-5">
            <div className="row">
              <div className="col-6">
                {' '}
                <div className="d-flex justify-content-between flex-column m-1">
                  <div>
                    <h5>Проект</h5>
                    <p>Хакатон</p>
                  </div>
                  <div>
                    <h5>Задание</h5>
                    <p>
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
                    <p>
                      Разработка компонента карточек команды, компонент progress
                      bar
                    </p>
                  </div>
                  <div>
                    <h5>Результат</h5>
                    <i className="bi bi-arrow-right text-info w-25"></i>
                    <a
                      target="_blank"
                      href="https://orlovaleksandr89.github.io/hakaton/#/hakaton"
                      style={{
                        color: '#fff',
                      }}
                    >
                      Web-site
                    </a>
                  </div>
                  <div className="m-3 text-center">
                    <img src={Table} alt="table" className="w-75" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-around flex-wrap m-1">
                  <img src={PC} alt="pc" className="w-100" />
                  <img src={Mobile} alt="mobile" className="w-50" />
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
