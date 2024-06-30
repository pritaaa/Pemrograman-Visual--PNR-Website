const LayananHome = () => {
  return (
    <section className="section section-lg">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="icon-box text-center mb-5 mb-md-0">
              <a href="#profil-dokter">
                <div className="icon icon-shape icon-lg bg-soft shadow-soft border border-light rounded-circle mb-3 btn-ungu">
                  <span className="fa fa-user-md"></span>
                </div>
              </a>
              <h2 className="h3 my-3">
                <a href="#profil-dokter">Profil Dokter</a>
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0">
            <div className="icon-box text-center">
              <a href="#informasi-poli">
                <div className="icon icon-shape icon-lg bg-soft shadow-soft border border-light rounded-circle mb-3 btn-ungu">
                  <span className="fa fa-stethoscope"></span>
                </div>
              </a>
              <h2 className="h3 my-3">
                <a href="#informasi-poli">Informasi Poli</a>
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0">
            <div className="icon-box text-center">
              <a href="#form-pengaduan">
                <div className="icon icon-shape icon-lg bg-soft shadow-soft border border-light rounded-circle mb-3 btn-ungu">
                  <span className="fas fa-file-alt"></span>
                </div>
              </a>
              <h2 className="h3 my-3">
                <a href="#form-pengaduan">Form Pengaduan</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayananHome;
