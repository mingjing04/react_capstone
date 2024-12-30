import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Footer from "./components/Footer";
import ReserveForm from "./components/Reservation";

const Home = () => {
  return (
    <>
      <Landing />
      <Menu />
      <Testimonial />
      <About />
      <Footer />
    </>
  )
}

const Reservation = () => {
  return (
    <>
      <ReserveForm />
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
