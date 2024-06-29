import React from 'react';

function CarouselSection() {
  return (
    <section className="section bg-primary text-dark section-lg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div id="Carousel1" className="carousel slide shadow-soft border border-light p-4 rounded" data-ride="carousel">
              <div className="carousel-inner rounded">
                <div className="carousel-item active">
                  <img src="assets/img/carousel/rs-1.jpg" className="d-block w-100" alt="slide1" />
                </div>
                <div className="carousel-item">
                  <img src="assets/img/carousel/rs-2.jpg" className="d-block w-100" alt="slide2" />
                </div>
                <div className="carousel-item">
                  <img src="assets/img/carousel/rs-3.jpg" className="d-block w-100" alt="slide3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarouselSection;
