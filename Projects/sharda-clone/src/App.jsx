import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import Home from "./pages/Home";
import AboutUs from "./pages/about/AboutUs";
import CareerJobsIntern from "./pages/about/CareerJobsIntern";
import Blog from "./pages/about/Blog";
import LatestEvents from "./pages/about/LatestEvents";
import CompanyProfile from "./pages/about/CompanyProfile";
import AwardsAndCertification from "./pages/about/AwardsAndCertification";
import Partners from "./pages/about/Partners";
import Team from "./pages/about/Team";
import SocialMedia from "./pages/services/SocialMedia";
import DigitalPromotions from "./pages/services/DigitalPromotions";
import ContentMarketing from "./pages/services/ContentMarketing";
import MotionGraphics from "./pages/services/MotionGraphics";
import GraphicDesigns from "./pages/services/GraphicDesigns";
import Videography from "./pages/services/Videography";
import Photoshoot from "./pages/services/Photoshoot";
import SEO from "./pages/services/SEO";
import BulkSMS from "./pages/services/BulkSMS";
import WebDevelopment from "./pages/services/WebDevelopment";
import OurWorks from "./pages/OurWorks";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
function App() {
  return (
    <>
      <Router>
        <TopHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* about  */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/about/career-jobs-and-internship"
            element={<CareerJobsIntern />}
          />
          <Route path="/about/blog" element={<Blog />} />
          <Route path="/about/latest-events" element={<LatestEvents />} />
          <Route path="/about/company-profile" element={<CompanyProfile />} />
          <Route
            path="/about/our-awards-and-certification"
            element={<AwardsAndCertification />}
          />
          <Route path="/about/our-partners" element={<Partners />} />
          <Route path="/about/team" element={<Team />} />

          {/* services  */}
          <Route
            path="/services/social-media-management"
            element={<SocialMedia />}
          />
          <Route
            path="/services/digital-promotions"
            element={<DigitalPromotions />}
          />
          <Route
            path="/services/content-marketing"
            element={<ContentMarketing />}
          />
          <Route
            path="/services/motion-graphics"
            element={<MotionGraphics />}
          />
          <Route
            path="/services/graphic-designs"
            element={<GraphicDesigns />}
          />
          <Route path="/services/videography" element={<Videography />} />
          <Route path="/services/photoshoot" element={<Photoshoot />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/bulk-sms" element={<BulkSMS />} />
          <Route
            path="/services/website-development"
            element={<WebDevelopment />}
          />

          {/* works  */}
          <Route path="/our-works" element={<OurWorks />} />

          {/* courses  */}
          <Route path="/courses" element={<Courses />} />

          {/* contact  */}
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
