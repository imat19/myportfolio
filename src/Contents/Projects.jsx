function Projects() {
  return (
    <div className="container-fluid bg-light p-0 m-0">
      <div className="container-lg pb-5">
        <h1 className="display-2 fw-bold mb-3 text-center" id="projects">Projects</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col h-100">
            <div className="card h-100 m-0 p-0">
              <img className="img-fluid" src="./images/capstone.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Dream Fields</h5>
                <p className="card-text">A real estate website is an online platform that allows users to search for, view, and interact with real estate listings and related information. These websites typically include a database of properties for sale or rent, as well as tools and resources for buyers, sellers, and real estate professionals.</p>
                <div className="row">
                  <div className="col my-2 text-center">
                    <a href="#" className="btn btn-dark mx-3" rel="noreferrer" target="_blank">Github</a>
                    <a href="#" className="btn btn-white border mx-3" rel="noreferrer" target="_blank">Live Link</a>
                  </div>
                </div>
                <div className="row">
                  <h6 className="fw-bold">Tech used :</h6>
                  <div className="col-12 d-flex justify-content-evenly">
                    <i className="fa-brands fa-html5 fs-2"></i>
                    <i className="fa-brands fa-css3 fs-2"></i>
                    <i className="fa-brands fa-bootstrap fs-2"></i>
                    <i className="fa-brands fa-php fs-2"></i>
                    <i className="fa-brands fa-laravel fs-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 m-0 p-0">
              <img className="img-fluid" src="./images/mini-project2.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Resort Villas</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="row">
                  <div className="col my-2 text-center">
                    <a href="https://github.com/WD29Group/resortvillas" className="btn btn-dark mx-3" rel="noreferrer" target="_blank">Github</a>
                    <a href="https://resortvillas.vercel.app/" rel="noreferrer" target="_blank"  className="btn btn-white border mx-3">Live Link</a>
                  </div>
                </div>
                <div className="row">
                  <h6 className="fw-bold">Tech used :</h6>
                  <div className="col-12 d-flex justify-content-evenly">
                    <i className="fa-brands fa-html5 fs-2"></i>
                    <i className="fa-brands fa-css3 fs-2"></i>
                    <i className="fa-brands fa-bootstrap fs-2"></i>
                    <i className="fa-brands fa-square-js fs-2"></i>
                    <i className="fa-brands fa-react fs-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 m-0 p-0">
              <img className="img-fluid" src="./images/mini-project1.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Kimi no Nawa</h5>
                <div className="row">
                  <div className="col my-2 text-center">
                    <i href="https://github.com/imat19/raymart" rel="noreferrer" target="_blank" className="btn btn-dark mx-3">Github</i>
                    <i href="https://raymart.vercel.app/" rel="noreferrer" target="_blank" className="btn btn-white border mx-3">Live Link</i>
                  </div>
                </div>
                <div className="row">
                  <h6 className="fw-bold">Tech used :</h6>
                  <div className="col-12 d-flex justify-content-evenly">
                    <i className="fa-brands fa-html5 fs-2"></i>
                    <i className="fa-brands fa-css3 fs-2"></i>
                    <i className="fa-brands fa-bootstrap fs-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 m-0 p-0">
              <img className="img-fluid" src="./images/portfolio1.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">My Portfolio</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="row">
                  <div className="col my-2 text-center">
                    <a href="https://github.com/imat19/myportfolio" rel="noreferrer" target="_blank" className="btn btn-dark mx-3">Github</a>
                    <a href="https://myportfolio-chi-gold.vercel.app/" rel="noreferrer" target="_blank"  className="btn btn-white border mx-3">Live Link</a>
                  </div>
                </div>
                <div className="row">
                  <h6 className="fw-bold">Tech used :</h6>
                  <div className="col-12 d-flex justify-content-evenly">
                    <i className="fa-brands fa-html5 fs-2"></i>
                    <i className="fa-brands fa-css3 fs-2"></i>
                    <i className="fa-brands fa-bootstrap fs-2"></i>
                    <i className="fa-brands fa-square-js fs-2"></i>
                    <i className="fa-brands fa-react fs-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects;