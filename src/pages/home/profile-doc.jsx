const ProfilDoc = () => {
  return (
    <section id="profil-dokter" className="section section-lg">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <div className="mb-5">
              <span className="h2">Profil Dokter</span>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="nav-wrapper position-relative mb-4">
                <ul
                  className="nav nav-pills flex-column flex-sm-row"
                  id="tabs-text"
                  role="tablist"
                >
                  <li className="nav-item mr-sm-3 mr-md-0">
                    <a
                      className="nav-link mb-sm-3 mb-md-0 active"
                      id="tabs-text-1-tab"
                      data-toggle="tab"
                      href="#tabs-text-1"
                      role="tab"
                      aria-controls="tabs-text-1"
                      aria-selected="true"
                    >
                      Senin
                    </a>
                  </li>
                  <li className="nav-item mr-sm-3 mr-md-0">
                    <a
                      className="nav-link mb-sm-3 mb-md-0"
                      id="tabs-text-2-tab"
                      data-toggle="tab"
                      href="#tabs-text-2"
                      role="tab"
                      aria-controls="tabs-text-2"
                      aria-selected="false"
                    >
                      Selasa
                    </a>
                  </li>
                  <li className="nav-item mr-sm-3 mr-md-0">
                    <a
                      className="nav-link mb-sm-3 mb-md-0"
                      id="tabs-text-3-tab"
                      data-toggle="tab"
                      href="#tabs-text-3"
                      role="tab"
                      aria-controls="tabs-text-3"
                      aria-selected="false"
                    >
                      Rabu
                    </a>
                  </li>
                  <li className="nav-item mr-sm-3 mr-md-0">
                    <a
                      className="nav-link mb-sm-3 mb-md-0"
                      id="tabs-text-4-tab"
                      data-toggle="tab"
                      href="#tabs-text-4"
                      role="tab"
                      aria-controls="tabs-text-3"
                      aria-selected="false"
                    >
                      Kamis
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card shadow-inset bg-primary border-light p-4 rounded">
                <div className="card-body p-0">
                  <div className="tab-content" id="tabcontent1">
                    <div
                      className="tab-pane fade show active"
                      id="tabs-text-1"
                      role="tabpanel"
                      aria-labelledby="tabs-text-1-tab"
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <div className="card bg-primary border-light shadow-soft mb-4">
                            <div className="card-header p-3">
                              <img
                                src="src/assets/img/team/rafi-team.jpg"
                                className="card-img-top rounded"
                                alt="Profile Picture"
                              />
                            </div>
                            <div className="card-body">
                              <h3 className="h5 card-title">
                                Rafi Achmad,dr.,Sp.PD
                              </h3>
                              <p className="card-text">Spesialis Penyakit Dalam</p>
                              <p className="card-text">
                                Jam Praktek : 14.00 - 16.00. <br />
                                {/* <!--<br>Rafi Achmad, dr, Sp.PD memiliki lebih dari 20 tahun pengalaman di bidang spesialis penyakit dalam dan telah diakui atas kontribusinya di bidang ini.--> */}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="card bg-primary border-light shadow-soft mb-4">
                            <div className="card-header p-3">
                              <img
                                src="src/assets/img/team/prita-team1.jpg"
                                className="card-img-top rounded"
                                alt="Profile Picture"
                              />
                            </div>
                            <div className="card-body">
                              <h3 className="h5 card-title">Prita Ayu,Sp.A.,Dr.</h3>
                              <p className="card-text">Spesialis Anak</p>
                              <p className="card-text">
                                Jam Praktek : 08.00 - 11.00. <br />
                                {/* <!----<br>Dr. Jane Smith is a leading neurologist with a focus on neurodegenerative diseases and has published numerous research papers.</p> --> */}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="card bg-primary border-light shadow-soft mb-4">
                            <div className="card-header p-3">
                              <img
                                src="src/assets/img/team/novia-team.jpg"
                                className="card-img-top rounded"
                                alt="Profile Picture"
                              />
                            </div>
                            <div className="card-body">
                              <h3 className="h5 card-title">
                                Novia Amanda,Sp.M .Dr
                              </h3>
                              <p className="card-text">Spesialis Mata</p>
                              <p className="card-text">
                                Jam Praktek : 08.00-11.00.
                                <br />
                                <br />
                                {/* <!-- <br>Dr. Emily Johnson is known for her compassionate care and expertise in pediatric medicine, making her a favorite among parents and children alike.</p> --> */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade equal-height-tab"
                      id="tabs-text-2"
                      role="tabpanel"
                      aria-labelledby="tabs-text-2-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card bg-primary border-light shadow-soft mb-4">
                            <div className="card-header p-3">
                              <img
                                src="./assets/img/team/prita-team1.jpg"
                                className="card-img-top rounded"
                                alt="Profile Picture"
                              />
                            </div>
                            <div className="card-body">
                              <h3 className="h5 card-title">Prita Ayu,Sp.A.,Dr.</h3>
                              <p className="card-text">Spesialis Mata</p>
                              <p className="card-text">
                                Jam Praktek : 08.00-11.00.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card bg-primary border-light shadow-soft mb-4">
                            <div className="card-header p-3">
                              <img
                                src="./assets/img/team/novia-team.jpg"
                                className="card-img-top rounded"
                                alt="Profile Picture"
                              />
                            </div>
                            <div className="card-body">
                              <h3 className="h5 card-title">
                                Novia Amanda,Sp.M .Dr
                              </h3>
                              <p className="card-text">Spesialis Mata</p>
                              <p className="card-text">
                                Jam Praktek : 08.00-11.00.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade equal-height-tab"
                      id="tabs-text-3"
                      role="tabpanel"
                      aria-labelledby="tabs-text-3-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card bg-primary border-light shadow-soft mb-4">
                            <div className="card-header p-3">
                              <img
                                src="./assets/img/team/rafi-team.jpg"
                                className="card-img-top rounded"
                                alt="Profile Picture"
                              />
                            </div>
                            <div className="card-body">
                              <h3 className="h5 card-title">
                                Rafi Achmad,dr.,Sp.PD
                              </h3>
                              <p className="card-text">Spesialis Penyakit Dalam</p>
                              <p className="card-text">
                                Jam Praktek : 14.00 - 16.00. <br />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card bg-primary border-light shadow-soft mb-4">
                            <div className="card-header p-3">
                              <img
                                src="./assets/img/team/novia-team.jpg"
                                className="card-img-top rounded"
                                alt="Profile Picture"
                              />
                            </div>
                            <div className="card-body">
                              <h3 className="h5 card-title">
                                Novia Amanda,Sp.M .Dr
                              </h3>
                              <p className="card-text">Spesialis Mata</p>
                              <p className="card-text">
                                Jam Praktek : 08.00-11.00.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade equal-height-tab"
                      id="tabs-text-4"
                      role="tabpanel"
                      aria-labelledby="tabs-text-4-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card bg-primary border-light shadow-soft mb-4">
                            <div className="card-header p-3">
                              <img
                                src="./assets/img/team/rafi-team.jpg"
                                className="card-img-top rounded"
                                alt="Profile Picture"
                              />
                            </div>
                            <div className="card-body">
                              <h3 className="h5 card-title">
                                Rafi Achmad,dr.,Sp.PD
                              </h3>
                              <p className="card-text">Spesialis Penyakit Dalam</p>
                              <p className="card-text">
                                Jam Praktek : 14.00 - 16.00. <br />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card bg-primary border-light shadow-soft mb-4">
                            <div className="card-header p-3">
                              <img
                                src="./assets/img/team/prita-team1.jpg"
                                className="card-img-top rounded"
                                alt="Profile Picture"
                              />
                            </div>
                            <div className="card-body">
                              <h3 className="h5 card-title">Prita Ayu,Sp.A.,Dr.</h3>
                              <p className="card-text">Spesialis Mata</p>
                              <p className="card-text">
                                Jam Praktek : 08.00-11.00.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilDoc;
