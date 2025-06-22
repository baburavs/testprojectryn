import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
// import Works from './components/Works'
import Experience from './components/Experience'
import Blog from './components/Blog'
// import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WorkSection from './components/WorkSection'
import BlogSection from './components/BlogSection'
import TestimonialSection from './components/TestimonialSection'
import ScrollBanner from "./components/ScrollBanner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Expertise />
      {/* <Works /> */}
      <WorkSection/>
      <Experience />
      {/* <Blog /> */}
      <BlogSection/>
     <TestimonialSection/>
      <FAQ />
      <ScrollBanner />
      <Footer />
    </div>
  )
}

export default App
