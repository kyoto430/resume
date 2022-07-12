import React from 'react'
import Image1 from '../assets/project_1/01-min.png'
import Image2 from '../assets/project_1/02-min.png'
import Image3 from '../assets/project_1/03-min.png'
import Image4 from '../assets/project_1/04-min.png'
import Image5 from '../assets/project_1/05-min.png'

import Image6 from '../assets/project_2/01-min.png'
import Image7 from '../assets/project_2/02-min.png'
import Image8 from '../assets/project_2/03-min.png'
import Image9 from '../assets/project_2/04-min.png'
import Image10 from '../assets/project_2/05-min.png'

import Image11 from '../assets/project_3/01-min.png'
import Image12 from '../assets/project_3/02-min.png'
import Image13 from '../assets/project_3/03-min.png'
import Image14 from '../assets/project_3/04-min.png'
import Image15 from '../assets/project_3/05-min.png'

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
                    <h5>
                      <strong>Проект</strong>
                    </h5>
                    <p>
                      <i className="bi bi-arrow-right text-info"></i>
                      Хакатон
                    </p>
                  </div>
                  <div>
                    <h5>
                      <strong>Задание</strong>
                    </h5>
                    <p className="p-2 ">
                      <i className="bi bi-arrow-right text-info"></i>
                      Разработать крутой сайт на React, который будет
                      представлять команду. Креативно рассказать о своей команде
                      как в целом так и о каждом участнике в отдельности. Любые
                      улучшения приветствуются, но должны поддерживаться
                      минимальный базовый функционал, который описан в
                      техническом задании.
                    </p>
                  </div>
                  <div>
                    <h5>
                      <strong>Задачи на проекте</strong>
                    </h5>
                    <p className="p-2">
                      <i className="bi bi-arrow-right text-info"></i>
                      Разработка компонента карточек команды.
                    </p>
                  </div>
                  <div>
                    <h5>
                      <strong>Результат</strong>
                    </h5>
                    <i className="bi bi-arrow-right text-info"> </i>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://orlovaleksandr89.github.io/hakaton/#/hakaton"
                      style={{
                        color: '#fff',
                      }}
                    >
                      <span>github pages</span>
                    </a>
                    <h5 className="mt-2">
                      <strong>Исходный код</strong>
                    </h5>
                    <i className="bi bi-arrow-right text-info"> </i>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/orlovaleksandr89/hakaton"
                      style={{
                        color: '#fff',
                      }}
                    >
                      <span>github</span>
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
        <div className="col-12 container m-1">
          <div className="container mb-5 mt-5">
            <div className="row">
              <div className="wrapper">
                <div className="d-flex justify-content-between flex-column m-1">
                  <div>
                    <h5>
                      <strong>Проект</strong>
                    </h5>
                    <p>
                      <i className="bi bi-arrow-right text-info"></i>
                      Блог
                    </p>
                  </div>
                  <div>
                    <h5>
                      <strong>Задание</strong>
                    </h5>
                    <p className="p-2 ">
                      <i className="bi bi-arrow-right text-info"></i>
                      Разработать Frontend часть приложения на React.
                    </p>
                  </div>
                  <div>
                    <h5>
                      <strong>Задачи на проекте</strong>
                    </h5>
                    <p className="p-2">
                      <i className="bi bi-arrow-right text-info"></i>
                      Минимум 3 страницы на сайте, реализованных с помощью React
                      Router.
                      <i className="bi bi-arrow-right text-info"></i>
                      Реализовать функционал: добавления, редактирования,
                      удаления, сортировки, поиска, фильтрации, пагинации.
                    </p>
                  </div>
                  <div>
                    <h5>
                      <strong>Результат</strong>
                    </h5>
                    <i className="bi bi-arrow-right text-info"> </i>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://kyoto430.github.io/project-blog/"
                      style={{
                        color: '#fff',
                      }}
                    >
                      <span>github pages</span>
                    </a>
                    <h5 className="mt-2">
                      <strong>Исходный код</strong>
                    </h5>
                    <i className="bi bi-arrow-right text-info"> </i>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/kyoto430/project-blog"
                      style={{
                        color: '#fff',
                      }}
                    >
                      <span>github</span>
                    </a>
                  </div>
                  <div className="m-3 text-center">
                    <img src={Image7} alt="pc" className="w-100 mt-1" />
                    <img src={Image6} alt="pc" className="w-100 m-1" />
                  </div>
                </div>
              </div>
              <div className="wrapper">
                <div className="d-flex justify-content-around flex-wrap m-1">
                  <img src={Image10} alt="pc-3" className="w-100 mb-1" />
                  <img src={Image9} alt="pc" className="w-100 m-1" />
                  <img src={Image8} alt="pc-2" className="w-100 mb-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 container m-1">
          <div className="container mb-5 mt-5">
            <div className="row">
              <div className="wrapper">
                <div className="d-flex justify-content-between flex-column m-1">
                  <div>
                    <h5>
                      <strong>Проект</strong>
                    </h5>
                    <p>
                      <i className="bi bi-arrow-right text-info"></i>
                      Веб-сайт
                    </p>
                  </div>
                  <div>
                    <h5>
                      <strong>Задание</strong>
                    </h5>
                    <p className="p-2 ">
                      <i className="bi bi-arrow-right text-info"></i>
                      Сверстать адаптивный веб-сайт используя HTML,
                      CSS(SASS),JavaScript.
                    </p>
                  </div>
                  <div>
                    <h5>
                      <strong>Задачи на проекте</strong>
                    </h5>
                    <p className="p-2">
                      <i className="bi bi-arrow-right text-info"></i>
                      Вёрстка Landing-page с меню-бургером и модальными окнами.
                    </p>
                  </div>
                  <div>
                    <h5>
                      <strong>Результат</strong>
                    </h5>
                    <i className="bi bi-arrow-right text-info"> </i>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://kyoto430.github.io/Project-1/"
                      style={{
                        color: '#fff',
                      }}
                    >
                      <span>github pages</span>
                    </a>
                    <h5 className="mt-2">
                      <strong>Исходный код</strong>
                    </h5>
                    <i className="bi bi-arrow-right text-info"> </i>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/kyoto430/Project-1"
                      style={{
                        color: '#fff',
                      }}
                    >
                      <span>github</span>
                    </a>
                  </div>
                  <div className="m-3 text-center">
                    <img src={Image12} alt="pc" className="w-100 mt-1" />
                    <img src={Image15} alt="pc" className="w-100 m-1" />
                  </div>
                </div>
              </div>
              <div className="wrapper">
                <div className="d-flex justify-content-around flex-wrap m-1">
                  <img src={Image11} alt="pc-3" className="w-100 mb-1" />
                  <img src={Image14} alt="pc" className="w-75 m-1" />
                  <img src={Image13} alt="pc-2" className="w-75 mb-1" />
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
