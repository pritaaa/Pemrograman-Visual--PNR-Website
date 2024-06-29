import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import { HeroComponent } from './components/Hero';
import IconBox from './components/IconBox';
import Main from './components/Main';
import ProfilDokter from './components/ProfilDokter';
import InformasiPoli from './Components/InformasiPoli';
import CarouselSection from './components/Carousel';
import ReviewSection from './components/Ulasan';
import ComplaintFormSection from './Components/FormPengaduan';
import Footer from './components/Footer';
import LayananDokter from './Components/Layanan-dokter';
import InformasiKamar from './Components/InformasiKamar';
import Login from './Components/Login';
import Signup from './Components/Daftar';
import SignupStep2 from './Components/Daftar2';


function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <Nav />
              <Routes>
                  <Route path="/" element={<Beranda />} />
                  <Route path="/layanan-dokter" element={<LayananDokter />} />
                  <Route path="/informasi-kamar" element={<InformasiKamar />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/signup2" element={<SignupStep2 />} />
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}



export default App;
