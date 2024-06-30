const Footer = () => {
  return (
    <footer class="d-flex pb-5 pt-6 pt-md-7 border-top border-light bg-primary">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 text-center mb-5">
            <div class="icon-box mb-3">
              <div class="icon icon-shape icon-shape-sm shadow-soft border border-light rounded-circle">
                <img
                  src="src/assets/img/brand/pnr3.png"
                  alt="Logo"
                  class="img-fluid"
                />
              </div>
            </div>
            <p>
              <strong>Lokasi RS. PNR</strong>
              <br />
              Jl. Gunung Agung 210, Kecamatan Mojoroto, Kota Kediri.
            </p>
          </div>

          <div class="col-6 col-lg-4 mb-5 mb-lg-0">
            <h3>Jam Operasional</h3>
            <ul class="footer-links list-unstyled mt-2">
              <li class="mb-1">
                <a class="p-2" target="_blank">
                  <span class="p-2">Poliklinik</span>
                  <span class="p-6">08.00-11.00</span>
                </a>
              </li>
            </ul>
            <ul class="footer-links list-unstyled mt-2">
              <li class="mb-1">
                <a class="p-2" target="_blank">
                  <span class="p-2">UGD</span>
                  <span class="p-6 text-right">24 Jam</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-lg-4 mb-5 mb-lg-0">
            <h3>Hubungi Kami</h3>
            <ul class="footer-links list-unstyled mt-2">
              <li class="mb-1">
                <a class="p-2" target="_blank">
                  +6285781226147
                  <span class="fa fa-phone"></span>
                </a>
              </li>
              <li class="mb-1">
                <a class="p-2" target="_blank">
                  rspnrkediri@gmail.com
                  <span class="fa fa-envelope"></span>
                </a>
              </li>
            </ul>
            <ul class="d-flex list-unstyled mb-5 mb-lg-0">
              <li class="mr-2">
                <a
                  href="https://www.instagram.com/pritaaa10/"
                  target="_blank"
                  class="btn btn-icon-only btn-pill btn-primary"
                  aria-label="twitter social link"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Follow @rspnrkediri on Twitter"
                >
                  <span aria-hidden="true" class="fab fa-instagram"></span>
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100008530303456"
                  target="_blank"
                  class="btn btn-icon-only btn-pill btn-primary"
                  aria-label="facebook social link"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Follow @rspnrkediri on Facebook"
                >
                  <span aria-hidden="true" class="fab fa-facebook"></span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  class="btn btn-icon-only btn-pill btn-primary"
                  aria-label="dribbble social link"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Follow us on Youtube"
                >
                  <span aria-hidden="true" class="fa fa-play"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="my-5" />
        <div class="row">
          <div class="col">
            <div
              class="d-flex text-center justify-content-center align-items-center"
              role="contentinfo"
            >
              <p class="font-weight-normal font-small mb-0">
                Build by Love <br />
                <span>Prita, </span>
                <span>Rafi, </span>
                <span>Novia</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
