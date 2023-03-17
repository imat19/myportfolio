function Contact() {
  return (
    <div className="container-lg pt-5 ps-0">
      <div className="row">
        <h1 className="display-2 fw-bold mb-3 text-center" id="contact"> Contact Me</h1>
        <div className="col-md-6 mb-3">
          <h1 className="border-start border-5 border-dark ps-4" id="message"> Leave a Message</h1>
          <form id="" action="https://formspree.io/f/xdovzbrg" method="POST">
            <label htmlFor="email" className="form-label">Email address <span className="text-danger">*</span></label>
            <input className="form-control" name="Email" id="email" type="email" required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            <div className="row">
              <div className="my-3">
                <label htmlFor="email" className="form-label">Fullname <span className="text-danger">*</span></label>
                <input className="form-control" name="fullname" id="firstName" type="text" placeholder="Ex. Juan Dela Cruz" required />
              </div>
            </div>
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="messagebox" name="messagebox" type="text" rows="3"></textarea>
            <button className="btn btn-dark my-3" type="submit">Submit</button>
          </form>
        </div>

        <div className="col-md-6 text-center">
          <img className="img-fluid" src="./images/contactme.png" alt="" width={500} />
        </div>
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-md-5 text-center">
          <img className="img-fluid" src="./images/messageme.png" alt="" width={250} />
        </div>
        <div className="col-md-5 mb-3">
          <h1 className="fw-semibold fs-1" id="message"> Leave a Message</h1>
          <form id="" action="https://formspree.io/f/xdovzbrg" method="POST">
            <label htmlFor="email" className="form-label">Email address <span className="text-danger">*</span></label>
            <input className="form-control" name="Email" id="email" type="email" required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            <div className="row">
              <div className="my-2">
                <label htmlFor="email" className="form-label">Fullname <span className="text-danger">*</span></label>
                <input className="form-control" name="fullname" id="firstName" type="text" placeholder="Ex. Juan Dela Cruz" required />
              </div>
            </div>
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="messagebox" name="messagebox" type="text" rows="4"></textarea>
            <button className="btn btn-dark my-3" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact;