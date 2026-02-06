import Nav from "./components/nav";
import Hero from "./components/hero";
import Connect from "./components/connect";
import Speciality from "./components/speciality";
import Collaborate from "./components/collaborate";
import Profile from "./components/profile";
import Faq from "./components/faq";
import Background from "./components/background";
import Started from "./components/started";
import Links from "./components/links";
import Footer from "./components/footer";
import OurOffice from "./components/ourOffice";

export default function Home() {
  return (

    <div className="pt-24">
      <Nav />
      <Hero />
      <Connect />
      <Speciality />
      <Collaborate />
      <Profile />
      <OurOffice />
      <Faq />
      <Background />
      <Started />
      <Links />
      <Footer />
    </div>
  );
}
