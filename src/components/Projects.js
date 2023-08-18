import React from 'react'

const Projects = () => {
  return (
    <section>
      <div className="row">

      <div className="col-lg-4 mb-4 mb-lg-0">
        <div
          className="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light">
          <img
            src="/portal.jpg"
            className="w-100" alt='project2'/>
          <h1>Portal</h1>
          <p>Student Portal for UPang Students</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light">
            <img
              src="/anime_list.jpg"
              className="w-100" alt='project1'/>
            <h1>MyAnimeList</h1>
            <p>Allows you to create your own anime list</p>
          </div>
        </div>
      <div className="col-lg-4 mb-4 mb-lg-0">
        <div
          className="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light">
          <img
            src="/epcr.jpg"
            className="w-100" alt='project3'/>
          <h1>EPCR</h1>
          <p>Alerts you when there's an emergency</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Projects
