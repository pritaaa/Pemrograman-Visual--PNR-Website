import React from 'react';
import Hero from './Hero';
import IconBox from './IconBox';
import ProfilDokter from './ProfilDokter';
import InformasiPoli from './InformasiPoli';

const Main = () => (
  <main>
    <Hero />
    <section className="section section-lg">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <IconBox href="#profil-dokter" icon="fa-user-md" title="Profil Dokter" />
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0">
            <IconBox href="#informasi-poli" icon="fa-stethoscope" title="Informasi Poli" />
          </div>
          <div className="col-12 col-md-4 mb-5 mb-md-0">
            <IconBox href="#form-pengaduan" icon="fas fa-file-alt" title="Form Pengaduan" />
          </div>
        </div>
      </div>
    </section>
    <ProfilDokter />
    <InformasiPoli />
  </main>
);

export default Main;
