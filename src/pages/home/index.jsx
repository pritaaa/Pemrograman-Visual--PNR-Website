import RoomCarousel from "./carousel-room";
import FormAduan from "./form-aduan";
import HomeBanner from "./home-banner";
import InfoPoli from "./info-poli";
import LayananHome from "./layanan-home";
import ProfilDoc from "./profile-doc";
import Ulasan from "./ulasan";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <LayananHome />
      <ProfilDoc />
      <InfoPoli />
      <RoomCarousel />
      <FormAduan />
    </main>
  );
};

export default Home;
