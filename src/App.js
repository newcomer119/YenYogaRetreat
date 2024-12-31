import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CourseInfo from "./components/CourseInfo";
import Facts from "./components/Facts";
import Features from "./components/Features";
import Courses from "./components/Courses";
import CourseSelection from "./components/CourseSelection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import Gallery from "./components/Gallery";
import Retreat from "./components/Retreat";
import Instructors from "./components/Instructors";
import Instructor from "./components/Instructor";
import Aos from "aos";
import UserProfile from "./components/UserProfile";
import Unsure from "./components/Unsure";
import About from "./components/About";
import "aos/dist/aos.css";
import { LanguageProvider } from "./context/LanguageContext";
// import { configDotenv } from "dotenv";

// Wrapper component to handle conditional rendering
const AppContent = () => {
  // const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
  // const SECRET = process.env.PAYPAL_CLIENT_SECRET;
  const location = useLocation();

  // Define paths where footer components should not appear
  const hideFooterPaths = ["/sign-up", "/sign-in", "/course-selection/:link"];

  // Check if current path matches any of the hideFooterPaths
  const shouldHideFooter = hideFooterPaths.some((path) => {
    // Convert route parameter syntax to regex
    const pathRegex = new RegExp("^" + path.replace(":link", "[^/]+") + "$");
    return pathRegex.test(location.pathname);
  });

  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:link" element={<CourseInfo />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          <Route path="/retreat" element={<Retreat />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/course-selection/:link" element={<CourseSelection />} />
          <Route path="/trainers" element={<Instructors />} />
          <Route path="/trainers/:id" element={<Instructor />} />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Courses />
                <Features />
                <Facts />
                <Gallery />
              </>
            }
          />
        </Routes>
      </div>
      {!shouldHideFooter && (
        <>
          <Unsure />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

const App = () => {
  // aos init
  Aos.init({
    duration: 1800,
    offset: 100,
  });

  return (
    <CartProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </CartProvider>
  );
};

export default App;
