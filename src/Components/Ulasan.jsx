import React from 'react';

function ReviewSection() {
  return (
    <section id="ulasan-panitia" className="section section-lg">
      <div className="row">
        <div className="col text-center">
          <h2 className="h2 text-center mt-6 mb-5">Ulasan Pasien</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div id="Carousel3" className="carousel slide shadow-soft border border-light p-3 rounded" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#Carousel3" data-slide-to="0" className="active"></li>
              <li data-target="#Carousel3" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner rounded">
              <div className="carousel-item active">
                <div className="card shadow-inset bg-primary border-light p-3 rounded">
                  <div className="card-body p-0">
                    <div className="tab-content" id="tabcontent1">
                      <div className="tab-pane fade show active" id="tabs-text-1" role="tabpanel" aria-labelledby="tabs-text-1-tab">
                        <div className="row">
                          <div className="col-md-6 align-items-center justify-content-center">
                            <div className="card bg-primary border-light shadow-soft mb-3 text-center">
                              <div className="card-header p-2">
                                <img src="./assets/img/team/ulasan-1.jpg" className="card-img-top rounded-circle" alt="Christopher Avatar" style={{ width: '80px', height: '80px' }} />
                              </div>
                              <div className="card-body">
                                <h3 className="h5 card-title">Kang Mo Yoen</h3>
                                <p className="card-text">Terimakasih kepada dokter yang sudah merawat saya 
                                  dan memberikan saya kesan yang sangat baik dan ramah.
                                  Waktu pengobatan saya benar-benar mendatangkan kesembuhan baik secara fisik dan mental.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 align-items-center justify-content-center">
                            <div className="card bg-primary border-light shadow-soft mb-3 text-center">
                              <div className="card-header p-2">
                                <img src="./assets/img/team/ulasan-2.jpg" className="card-img-top rounded-circle" alt="Christopher Avatar" style={{ width: '80px', height: '80px' }} />
                              </div>
                              <div className="card-body">
                                <h3 className="h5 card-title">Yoo Si Jin</h3>
                                <p className="card-text">I would like to say a special thank you to the doctor who has given advice for my mental recovery.
                                  I hope to continue in the friendly service and way of
                                  hospital treatment that really feels a break in the midst of my work as an actor.
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
              <div className="carousel-item">
                <div className="card shadow-inset bg-primary border-light p-3 rounded">
                  <div className="card-body p-0">
                    <div className="tab-content" id="tabcontent1">
                      <div className="tab-pane fade show active" id="tabs-text-1" role="tabpanel" aria-labelledby="tabs-text-1-tab">
                        <div className="row">
                          <div className="col-md-12 align-items-center justify-content-center">
                            <div className="card bg-primary border-light shadow-soft mb-3 text-center">
                              <div className="card-header p-2">
                                <img src="./assets/img/team/ulasan-3.jpg" className="card-img-top rounded-circle" alt="Christopher Avatar" style={{ width: '80px', height: '80px' }} />
                              </div>
                              <div className="card-body">
                                <h3 className="h5 card-title">Andelle</h3>
                                <p className="card-text">Sudah bertahun-tahun saya berobat ke dokter dengan penyakit saya.
                                  Akhirnya saya menemukan kesembuhan saya disini bersama para tenaga kerja kesehatan di rumah sakit ini.
                                  Saya akhirnya merasa sembuh sepenuhnya.
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
            <a className="carousel-control-prev" href="#Carousel3" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#Carousel3" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
