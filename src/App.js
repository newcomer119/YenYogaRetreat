import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import SignUp from "./components/SignUp";
import AllCourses from "./components/AllCourses";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Facts from "./components/Facts";
import Features from "./components/Features";
import Courses from "./components/Courses";
import CourseSelection from "./components/CourseSelection";
import Newsletter from "./components/Newsletter";
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

// Wrapper component to handle conditional rendering
const AppContent = () => {
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
      <div className="pt-[110px] b">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/classes" element={<AllCourses />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/retreat" element={<Retreat />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route
            path="/course-selection/:link"
            element={<CourseSelection />}
          />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructors/:id" element={<Instructor />} />
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Courses />
                <Instructors />
                <Gallery />
                <Facts />
                <Features />
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
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
};

export default App;
