function About() {
  return (
    <div className="container-fluid bg-white py-5">
      <div className="container-lg mt-4 ps-2">
        <div className="row d-flex align-items-center">
          <div className="col-md-6  d-flex justify-content-center">
            <img className="img-fluid text-center" src="./images/yoga.png" alt="" width={500} />
          </div>
          <div className="col-md-6">
            <h1 className="display-2 fw-bold text-center" id="aboutme"> About Me</h1>
            <p className="text-justify fs-5">As a junior Web Developer, I am a tech enthusiast who is passionate about creating user-friendly and visually appealing websites. I have a strong foundation in programming languages such as HTML, CSS, PHP, and JavaScript, and I am constantly updating my skills to keep up with the latest web development trends and technologies.</p>
          </div>
        </div>
      </div>
    </div>

  )
}
export default About;