import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Portfolio() {
  return (
    <div>
      
  
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            MyPortfolio
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    
      <section
        id="home"
        className="bg-primary text-white text-center py-5"
      >
        <div className="container">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.RSN2MnM1FTGOPbq2wSBEugHaJQ?r=0&cb=thfvnextfalcon&w=2880&h=3600&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="profile"
            className="rounded-circle mb-0 w-25"
          />

          <h1 className="display-4">Ansh Rathod</h1>

          <p className="lead">
            React Developer | Frontend Developer | JavaScript Developer
          </p>

          <button className="btn btn-light btn-lg">
            Hire Me
          </button>
        </div>
      </section>

      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Me</h2>

          <div className="row">
            <div className="col-md-6">
              <img
                src="https://i.pinimg.com/736x/8b/dd/9b/8bdd9bd1d4ce68b57c2fd49257463195.jpg"
                alt="about"
                className="img-fluid rounded h-100 w-25"
              />
            </div>

            <div className="col-md-6 d-flex align-items-center">
              <p>
                I am a passionate React Developer who loves building modern and
                responsive web applications using React JS, JavaScript, HTML,
                CSS, and Bootstrap.
              </p>
            </div>
          </div>
        </div>
      </section>

   
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Skills</h2>

          <div className="row text-center">
            <div className="col-md-3 mb-3">
              <div className="card p-3">
                <h4>HTML</h4>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card p-3">
                <h4>CSS</h4>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card p-3">
                <h4>JavaScript</h4>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card p-3">
                <h4>React JS</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Projects</h2>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://repository-images.githubusercontent.com/444216668/9b4beaa3-b5e2-428b-9d3b-b1af2ba1d51d"
                  className="card-img-top"
                  alt="project"
                />

                <div className="card-body">
                  <h5 className="card-title">Todo App</h5>

                  <p className="card-text">
                    React Todo Application with CRUD functionality.
                  </p>

                  <button className="btn btn-primary">
                    View Project
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4 ">
              <div className="card">
                <img
  src="https://user-images.githubusercontent.com/25284536/90274607-2535a000-de76-11ea-9d21-ab8c3e68b3a9.png"
  className="card-img-top"
  alt="project"
  style={{ height: "200px", objectFit: "cover" }}
/>

                <div className="card-body">
                  <h5 className="card-title">Weather App</h5>

                  <p className="card-text">
                    Weather application using API and React JS.
                  </p>

                  <button className="btn btn-primary">
                    View Project
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2022/12/GL/JW/HH/123274038/e-commerce-website-design-500x500.jpg"
                  className="card-img-top "
                  alt="project"
                />

                <div className="card-body">
                  <h5 className="card-title">E-Commerce</h5>

                  <p className="card-text">
                    Shopping website using React and Bootstrap.
                  </p>

                  <button className="btn btn-primary">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Me</h2>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="form-control mb-3"
                />

                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-control mb-3"
                />

                <textarea
                  placeholder="Message"
                  className="form-control mb-3"
                  rows="4"
                ></textarea>

                <button className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    
      <footer className="bg-secondary text-white text-center py-3">
        <p className="mb-0">
          © 2026 Ansh Rathod | All Rights Reserved
        </p>
      </footer>
    </div>
  );
}