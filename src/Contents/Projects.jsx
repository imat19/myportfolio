function Projects(){
  return(
    <div className="container-lg pt-5 mb-5">
    <h1 className="border-start border-5 border-dark ps-4 mb-3" id="projects">Projects</h1>
    <div className="row g-3">
      <div className="col-6 col-12 col-md-6">
        <div className="card shadow">
          <div className="row g-0">
            <div className="col-md-7">
              {/* <Image src="/images/Dreamfields.png" className="img-fluid rounded-start" alt="..." width={1500} height={1500} /> */}
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h5 className="card-title">Dream Fields</h5>
                <p className="card-text">This is a wider card with supporting text below as</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 col-12 col-md-6">
        <div className="card shadow" height={1200} width={1200}>
          <div className="row g-0">
            <div className="col-md-7">
              {/* <Image src="/images/Dreamfields.png" className="img-fluid rounded-start" alt="..." width={1500} height={1500} /> */}
            </div>
            <div className="col-md-5">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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