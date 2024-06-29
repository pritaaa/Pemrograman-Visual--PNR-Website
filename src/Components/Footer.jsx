import React from 'react';

function Footer() {
  return (
    <footer className="d-flex pb-5 pt-6 pt-md-7 border-top border-light bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 text-center mb-5">
            <div className="icon-box mb-3">
              <div className="icon icon-shape icon-shape-sm shadow-soft border border-light rounded-circle">
                <img src="assets/img/brand/pnr3.png" alt="Logo" className="img-fluid" />
              </div>
            </div>
            <p><strong>Lokasi RS. PNR</strong><br />Jl. Gunung Agung 210, Kecamatan Mojoroto, Kota Kediri.</p>
          </div>
          <div className="col-6 col-lg-4 mb-5 mb-lg-0">
            <h3>Jam Operasional</h3>
            <ul className="footer-links list-unstyled mt-2">
              <li className="mb-1">
                <a className="p-2" target="_blank" rel="noreferrer">
                  <span className="p-2">Poliklinik</span>
                  <span className="p-6">08.00-11.00</span>
                </a>
              </li>
            </ul>
            <ul className="footer-links list-unstyled mt-2">
              <li className="mb-1">
                <a className="p-2" target="_blank" rel="noreferrer">
                  <span className="p-2">UGD</span>
                  <span className="p-6 text-right">24 Jam</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <h3>Hubungi Kami</h3>
            <ul className="footer-links list-unstyled mt-2">
              <li className="mb-1">
                <a className="p-2" target="_blank" rel="noreferrer">+6285781226147
                  <span className="fa fa-phone"></span>
                </a>
              </li>
              <li className="mb-1">
                <a className="p-2" target="_blank" rel="noreferrer">rspnrkediri@gmail.com
                  <span className="fa fa-envelope"></span>
                </a>
              </li>
            </ul>
            <ul className="d-flex list-unstyled mb-5 mb-lg-0">
              <li className="mr-2">
                <a href="https://www.instagram.com/pritaaa10/" target="_blank" rel="noreferrer" className="btn btn-icon-only btn-pill btn-primary" aria-label="twitter social link"
                  data-toggle="tooltip" data-placement="top" title="Follow @rspnrkediri on Twitter">
                  <span aria-hidden="true" className="fab fa-instagram"></span>
                </a>
              </li>
              <li className="mr-2">
                <a href="https://www.facebook.com/profile.php?id=100008530303456" target="_blank" rel="noreferrer" className="btn btn-icon-only btn-pill btn-primary" aria-label="facebook social link"
                  data-toggle="tooltip" data-placement="top" title="Follow @rspnrkediri on Facebook">
                  <span aria-hidden="true" className="fab fa-facebook"></span>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="btn btn-icon-only btn-pill btn-primary" aria-label="dribbble social link"
                  data-toggle="tooltip" data-placement="top" title="Follow us on Youtube">
                  <span aria-hidden="true" className="fa fa-play"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row">
          <div className="col">
            <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
              <p className="font-weight-normal font-small mb-0">Build by Love
                <br /><span>Prita, </span><span>Rafi, </span><span>Novia</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
