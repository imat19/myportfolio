
function Home() {
  return (
    <div className="container-lg" data-aos="fade-right">
    <div className="container-lg pb-5 pt-3 m-0">
        <div className="row d-flex align-items-center" id="home">
          <div className="col-md-6 col-12 mb-4 m-0 p-0">
            <div className="text-center">
              <h1 className="display-3 fw-bold">Hi, <span className="align-text-bottom"> <img className="img-fluid" src="./images/wave.gif" alt="" width={90} /></span>
                <br />
                I'm Raymart Vergara</h1>
              <h3 className="display-5 fw-semibold">Junior Web Developer</h3>
              <button className="btn btn-dark px-4 py-2 mt-3 mx-2"><a href="#aboutme" className="text-white text-decoration-none"><span className="h5 hfw-bold">About</span></a></button>
              <button className="btn bg-tranparent border border-dark px-3 py-2 mt-3 mx-2"><a href="#contact" className="text-dark text-decoration-none"><span className="h5 hfw-bold">Contact</span></a> </button>
            </div>
          </div>
          <div className="col-md-6 col-12 p-0 my-3 text-center" data-aos="flip-right">
            <img className="img-fluid" src="./images/imat.png" alt=" " width={450} />
          </div>
        </div>
    </div>
    </div>
  )
}
export default Home;