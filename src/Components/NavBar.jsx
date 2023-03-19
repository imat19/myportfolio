
function NavBar() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container-lg">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#home"><img className="img-fluid" src="./images/blacklogo.png" alt="" width={50} /></a>
          <div className="collapse navbar-collapse fw-bold" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 text-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutme">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <div className="text-center">
              <button className="btn  border border-2 border-dark p-2  fs-6 text-center" target="_blank"><a className="text-decoration-none text-dark" href="./images/Raymart Vergara.pdf" target="_blank" >Download CV</a> </button>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default NavBar;
