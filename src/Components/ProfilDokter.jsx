import React from 'react';

const ProfilDokter = () => (
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
              <ul className="nav nav-pills flex-column flex-sm-row" id="tabs-text" role="tablist">
                <li className="nav-item mr-sm-3 mr-md-0">
                  <a className="nav-link mb-sm-3 mb-md-0 active" id="tabs-text-1-tab" data-toggle="tab" href="#tabs-text-1" role="tab" aria-controls="tabs-text-1" aria-selected="true">Senin</a>
                </li>
                <li className="nav-item mr-sm-3 mr-md-0">
                  <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-2-tab" data-toggle="tab" href="#tabs-text-2" role="tab" aria-controls="tabs-text-2" aria-selected="false">Selasa</a>
                </li>
                <li className="nav-item mr-sm-3 mr-md-0">
                  <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-3-tab" data-toggle="tab" href="#tabs-text-3" role="tab" aria-controls="tabs-text-3" aria-selected="false">Rabu</a>
                </li>
                <li className="nav-item mr-sm-3 mr-md-0">
                  <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-4-tab" data-toggle="tab" href="#tabs-text-4" role="tab" aria-controls="tabs-text-4" aria-selected="false">Kamis</a>
                </li>
              </ul>
            </div>
            <div className="card shadow-inset bg-primary border-light p-4 rounded">
              <div className="card-body p-0">
                <div className="tab-content" id="tabcontent1">
                  <div className="tab-pane fade show active" id="tabs-text-1" role="tabpanel" aria-labelledby="tabs-text-1-tab">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/rafi-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Rafi Gaffar</h4>
                            <p className="card-text text-white">Spesialis Bedah</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/daniel-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Daniel Andrean</h4>
                            <p className="card-text text-white">Spesialis Jantung</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/rafi-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Rafi Gaffar</h4>
                            <p className="card-text text-white">Spesialis Bedah</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-text-2" role="tabpanel" aria-labelledby="tabs-text-2-tab">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/rafi-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Rafi Gaffar</h4>
                            <p className="card-text text-white">Spesialis Bedah</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/daniel-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Daniel Andrean</h4>
                            <p className="card-text text-white">Spesialis Jantung</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/rafi-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Rafi Gaffar</h4>
                            <p className="card-text text-white">Spesialis Bedah</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-text-3" role="tabpanel" aria-labelledby="tabs-text-3-tab">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/rafi-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Rafi Gaffar</h4>
                            <p className="card-text text-white">Spesialis Bedah</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/daniel-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Daniel Andrean</h4>
                            <p className="card-text text-white">Spesialis Jantung</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/rafi-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Rafi Gaffar</h4>
                            <p className="card-text text-white">Spesialis Bedah</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-text-4" role="tabpanel" aria-labelledby="tabs-text-4-tab">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/rafi-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Rafi Gaffar</h4>
                            <p className="card-text text-white">Spesialis Bedah</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/daniel-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Daniel Andrean</h4>
                            <p className="card-text text-white">Spesialis Jantung</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/rafi-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Rafi Gaffar</h4>
                            <p className="card-text text-white">Spesialis Bedah</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-text-5" role="tabpanel" aria-labelledby="tabs-text-5-tab">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/rafi-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Rafi Gaffar</h4>
                            <p className="card-text text-white">Spesialis Bedah</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/daniel-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Daniel Andrean</h4>
                            <p className="card-text text-white">Spesialis Jantung</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/rafi-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Rafi Gaffar</h4>
                            <p className="card-text text-white">Spesialis Bedah</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-text-6" role="tabpanel" aria-labelledby="tabs-text-6-tab">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/rafi-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Rafi Gaffar</h4>
                            <p className="card-text text-white">Spesialis Bedah</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/daniel-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Daniel Andrean</h4>
                            <p className="card-text text-white">Spesialis Jantung</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/rafi-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Rafi Gaffar</h4>
                            <p className="card-text text-white">Spesialis Bedah</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tabs-text-7" role="tabpanel" aria-labelledby="tabs-text-7-tab">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/rafi-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Rafi Gaffar</h4>
                            <p className="card-text text-white">Spesialis Bedah</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/daniel-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Daniel Andrean</h4>
                            <p className="card-text text-white">Spesialis Jantung</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card bg-primary border-light shadow-soft mb-4">
                          <div className="card-header p-3">
                            <img src="./assets/img/team/rafi-team.jpg" className="card-img-top rounded" alt="Profile Picture" />
                          </div>
                          <div className="card-body">
                            <h4 className="card-title text-white">dr. Rafi Gaffar</h4>
                            <p className="card-text text-white">Spesialis Bedah</p>
                            <p className="card-text text-white">08.00 - 12.00 WIB</p>
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

export default ProfilDokter;
    