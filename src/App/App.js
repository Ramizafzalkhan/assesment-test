
import Banner from "./components/banner/banner";
import Community from "./components/community/community";
import Feature from "./components/features/feature";
import Lgf from "./components/lgf/lgf";
import OurTeam from "./components/ourTeam/ourTeam";
import OurAdvisor from "./components/ourAdvisor/ourAdvisor";
import Appdesign from "./components/appDesign/appdesign";
// import OurAdvisor from "./components/ourAdvisor/ourAdvisor";

// import './App.css';

function App() {
  return (
    <>
      <Banner />
      <Community />
      <div style={{ background: 'url(/assets/images/feature-bg.png)top right no-repeat' }}>
        <Feature />
        <Lgf />
        <OurTeam />
        <OurAdvisor />
        <Appdesign />
      </div>
    </>
  );
}

export default App;
