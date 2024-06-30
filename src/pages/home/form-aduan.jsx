const FormAduan = () => {
  return (
    <section id="form-pengaduan" className="section section-lg">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2>Form Pengaduan</h2>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12 col-lg-12 mb-5">
            <form className="col-12 col-md-8 mx-auto">
              <div className="form-group">
                <label for="nameInputIcon2">Nama</label>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <span className="far fa-user-circle"></span>
                    </span>
                  </div>
                  <input
                    className="form-control"
                    id="nameInputIcon2"
                    placeholder="contoh : prita"
                    type="text"
                    aria-label="contact name input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="emailInputIcon2">No Handphone</label>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <span className="fa fa-phone"></span>
                    </span>
                  </div>
                  <input
                    className="form-control"
                    id="emailInputIcon2"
                    placeholder="contoh : +62"
                    type="email"
                    aria-label="contact email input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea2">Keluhan</label>
                <textarea
                  className="form-control"
                  placeholder="Masukkan pesan anda..."
                  id="exampleFormControlTextarea2"
                  rows="4"
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  className="btn btn-primary animate-down-2 btn-pink"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormAduan;
