
function NavBar() {
  return (
    <div className="App">
    <nav className="navbar bg-dark" data-bs-theme="dark" id="home">
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
      </nav>
    </div>
  );
}

export default NavBar;
