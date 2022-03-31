import Footer from "./components/footer/Footer";
import NavBar from "./components/header/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Error from "./components/error/Error";
import Profile from "./components/profile/Profile";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <main className="mt-5">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:id" element={<Profile />}>
            <Route path=":id" element={<Profile />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
