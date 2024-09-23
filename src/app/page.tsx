// pages/index.tsx

import MainSection from "./components/MainSection";
import Nav from "./components/Nav";
import Video from "./components/DemoVideo";
import Features from "./components/Features";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
    <main className="max-w-[90rem] mx-auto px-4">
      <Nav />
      <MainSection />
      <Video />
      <Features />
      <FAQ />
    </main>
    <Footer /> 
  </>
  );
};

export default Home;
