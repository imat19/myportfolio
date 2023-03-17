
function NavBar() {
  return (
    <div className="">
      {/* <nav className="navbar bg-dark" data-bs-theme="dark" id="home">
        <img className="img-fluid ms-2" src="./images/whitelogo.png" width={40} alt=" " />
        <div className="col text-center">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-white active" aria-current="page" href="#home">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#aboutme">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#projects">PROJECTS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
        <li className="nav-item d-flex justify-content-end me-2">
          <a className="nav-link text-white border ">Download CV</a>
        </li>
      </nav> */}
      <nav class="navbar navbar-expand-lg">
  <div class="container-lg">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#"><img className="img-fluid" src="./images/blacklogo.png" alt=""  width={50}/></a>
    <div class="collapse navbar-collapse fw-bold" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5 text-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#aboutme">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
      <div className="text-center">
        <span className="rounded-pill border border-2 border-dark p-2  fs-6 text-center">Download CV</span>
        </div>
    </div>
  </div>

</nav>

    </div>
    
  );
}

export default NavBar;
