const HomeBanner = () => {
  return (
    <section className="section section bg-soft pb-5 overflow-hidden z-2">
      <div className="container z-2">
        <div className="row text-left pt-6 align-items-center">
          <div className="col-12 col-lg-6 text-left">
            <h1 className="display-2 mb-3">
              Patient <span className="text-ungu">Nurturing</span> and
              Rehabilitation
            </h1>
            <p className="lead text-left">Melayani anda dengan sepenuh hati.</p>
          </div>
          <div className="col-12 col-lg-6 text-center">
            <img
              src="src/assets/img/carousel/hosp+pinklop.png"
              className="hospital-icon"
              alt="slide2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
