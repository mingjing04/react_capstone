import React from 'react'
import Landing from '../components/Landing'
import Testimonial from '../components/Testimonial'
import Menu from '../components/Menu'
import About from '../components/About'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Landing />
        <Menu />
        <Testimonial />
        <About />
        <Footer />
    </div>
  )
}

export default Home