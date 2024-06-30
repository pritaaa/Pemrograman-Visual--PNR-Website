const InfoPoli = () => {
  return (
    <div id="informasi-poli" className="section bg-primary text-dark section-lg">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div>
              <span className="h2 text-center">Informasi Poli</span>
            </div>
          </div>
        </div>

        <div className="row mt-6">
          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-block btn-primary mb-4"
              data-toggle="modal"
              data-target="#modal-default"
            >
              Poli Anak
            </button>
            <div
              className="modal fade"
              id="modal-default"
              tabindex="-1"
              role="dialog"
              aria-labelledby="modal-default"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content bg-primary">
                  <div className="modal-header">
                    <p className="modal-title" id="modal-title-notification">
                      Informasi Poli Anak.
                    </p>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="py-3 text-center">
                      <span className="modal-icon display-1-lg">
                        <span className="fa fa-user-md"></span>
                      </span>
                      <h2 className="h4 my-3">Prita Ayu,Sp.A.,Dr.</h2>
                      <p>
                        Jadwal Praktek : 08.00-11.00.
                        <br />
                        <br />
                        Hari : Senin, Selasa, Kamis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-block btn-primary mb-4"
              data-toggle="modal"
              data-target="#modal-notification"
            >
              Poli Penyakit Dalam
            </button>
            <div
              className="modal fade"
              id="modal-notification"
              tabindex="-1"
              role="dialog"
              aria-labelledby="modal-notification"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content bg-primary">
                  <div className="modal-header">
                    <p className="modal-title" id="modal-title-notification">
                      Informasi Poli Penyakit Dalam.
                    </p>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="py-3 text-center">
                      <span className="modal-icon display-1-lg">
                        <span className="fa fa-user-md"></span>
                      </span>
                      <h2 className="h4 my-3">Rafi Achmad,dr.,Sp.PD.</h2>
                      <p>
                        Jadwal Praktek : 14.00-16.00.
                        <br />
                        <br />
                        Hari : Senin, Rabu, Kamis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-block btn-primary mb-4"
              data-toggle="modal"
              data-target="#modal-form-signup"
            >
              Poli Umum
            </button>
            <div
              className="modal fade"
              id="modal-form-signup"
              tabindex="-1"
              role="dialog"
              aria-labelledby="modal-form-signup"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content bg-primary">
                  <div className="modal-header">
                    <p className="modal-title" id="modal-title-notification">
                      Informasi Poli Umum.
                    </p>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="py-3 text-center">
                      <span className="modal-icon display-1-lg">
                        <span className="fa fa-user-md"></span>
                      </span>
                      <h2 className="h4 my-3">Rafi Achmad,dr.,Sp.PD.</h2>
                      <p>
                        Jadwal Praktek : 14.00-16.00.
                        <br />
                        <br />
                        Hari : Senin, Rabu, Kamis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-block btn-primary mb-4"
              data-toggle="modal"
              data-target="#modal-achievement"
            >
              Poli Mata
            </button>
            <div
              className="modal fade"
              id="modal-achievement"
              tabindex="-1"
              role="dialog"
              aria-labelledby="modal-achievement"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content bg-primary">
                  <div className="modal-header">
                    <p className="modal-title" id="modal-title-notification">
                      Informasi Poli Mata.
                    </p>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="py-3 text-center">
                      <span className="modal-icon display-1-lg">
                        <span className="fa fa-user-md"></span>
                      </span>
                      <h2 className="h4 my-3">Novia Amanda,Sp.M .Dr</h2>
                      <p>
                        Jadwal Praktek : 08.00-11.00
                        <br />
                        <br />
                        Hari : Senin, Selasa, Rabu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPoli;

  

