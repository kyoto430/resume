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
                    <h5>Project</h5>
                    <p>
                      <i className="bi bi-arrow-right text-info"></i>
                      Hackathon
                    </p>
                  </div>
                  <div>
                    <h5>Task</h5>
                    <p className="bg-black p-2">
                      <i className="bi bi-arrow-right text-info"></i>
                      Develop a cool website on React that will present the
                      team. It is creative to tell about your the team as a
                      whole and about each participant separately. Any
                      improvements are welcome, but must be maintained the
                      minimum basic functionality, which is described in
                      technical task.
                    </p>
                  </div>
                  <div>
                    <h5>Tasks on the project</h5>
                    <p className="bg-black p-2">
                      <i className="bi bi-arrow-right text-info"></i>
                      Development of the team cards component
                    </p>
                  </div>
                  <div>
                    <h5>Result</h5>
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
