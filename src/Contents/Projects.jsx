function Projects() {
  return (
    <div className="container-fluid bg-light">
      <div className="container-lg">
        <h1 className="display-2 fw-bold mb-3 text-center" id="projects">Projects</h1>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col h-100">
            <div class="card h-100">
              <img className="img-fluid" src="./images/capstone.jpg" alt="" />
              <div class="card-body">
                <h5 class="card-title">Dream Fields</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img className="img-fluid" src="./images/mini-project2.jpg" alt="" />
              <div class="card-body">
                <h5 class="card-title">Resort Villas</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img className="img-fluid" src="./images/mini-project1.jpg" alt="" />
              <div class="card-body">
                <h5 class="card-title">Kimi no Nawa</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img className="img-fluid" src="./images/portfolio1.jpg" alt="" />
              <div class="card-body">
                <h5 class="card-title">My Portfolio</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects;