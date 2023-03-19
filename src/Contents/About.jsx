function About() {
  return (
    <div className="container-fluid bg-white py-5" >
      <div className="container-lg mt-4 ps-2"  data-aos="fade-up">
        <div className="row d-flex align-items-center">
          <div className="col-md-6  d-flex justify-content-center">
            <img className="img-fluid text-center" src="./images/yoga.png" alt="" width={550} />
          </div>
          <div className="col-md-6">
            <h1 className="display-2 fw-bold text-center" id="aboutme"> About Me</h1>
            <p className="text-justify fs-5">As a junior Web Developer, I am a tech enthusiast who is passionate about creating user-friendly and visually appealing websites. I have a strong foundation in programming languages such as HTML, CSS, PHP, and JavaScript, and I am constantly updating my skills to keep up with the latest web development trends and technologies.</p>
            <hr />
            <h3 className="fw-bold mb-3">Tech Stacks</h3>
            <div className="row text-center fw-bold">
              <div className="col-md-3 col-6">
                <i className="fa-brands fa-html5 fs-1"></i>
                <p>HTML</p>
              </div>
              <div className="col-md-3 col-6">
                <i className="fa-brands fa-css3-alt fs-1"></i>
                <p>CSS</p>
              </div>
              <div className="col-md-3 col-6">
                <i className="fa-brands fa-square-js fs-1"></i>
                <p>Javascript</p>
              </div>
              <div className="col-md-3 col-6">
                <i className="fa-brands fa-react fs-1"></i>
                <p>Reactjs</p>
              </div>
              <div className="col-md-3 col-6">
                <i className="fa-brands fa-php fs-1"></i>
                <p>PHP</p>
              </div>
              <div className="col-md-3 col-6">
                <i className="fa-brands fa-laravel fs-1"></i>
                <p>Laravel</p>
              </div>
              <div className="col-md-3 col-6">
              <i className="fa-brands fa-figma fs-1"></i>
                <p>Figma</p>
              </div>
              <div className="col-md-3 col-6">
              <i className="fa-brands fa-bootstrap fs-1"></i>
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default About;