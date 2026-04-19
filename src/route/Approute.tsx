import { BrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Process from "../components/sections/Process";
import Portfolio from "../pages/Portfolio";
import Technologies from "../components/sections/Technologies";
import Contact from "../pages/Contact";

function Approute() {
  return (
    <BrowserRouter>
      <Layout>
        <div>
          <Home />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Process />
        </div>
        <div>
          <Portfolio />
        </div>
        <div>
          <Technologies />
        </div>
        <div>
          <Contact />
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default Approute;
