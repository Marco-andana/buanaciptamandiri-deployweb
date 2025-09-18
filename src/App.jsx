import './index.css'
import Header from './components/Header'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import MainBody from './components/MainBody'
import AboutUs from './components/AboutUs'
import Feature from './components/Feature'
import { getFeatureData } from './utils/feature-data'
import { getTestimonialData } from './utils/testimonial-data'
import Testimonial from './components/Testimonial'
import FindUs from './components/FindUs'
import Contact from './components/Contact'
import SakamitsuProductSection from './components/SakamitsuProductSection'

function App() {
  const [featureData, setFeatureData] = useState([])
  const [testimonialData, setTestimonialData] = useState([])

  useEffect(() => {
    const fetchFeatureData = async () => {
      const data = getFeatureData();
      setFeatureData(data);
    }

    fetchFeatureData();

    const fetchTestimonialData = async () => {
      const testiData = getTestimonialData();
      setTestimonialData(testiData);
    }

    fetchTestimonialData();

  }, [])

  return (
    <>
      <Navbar />
      <MainBody />
      <SakamitsuProductSection />
      <AboutUs />
      <Feature feature = {featureData} />
      <Testimonial testi = {testimonialData} />
      <FindUs />
      <Contact />
    </>
  )
}

export default App;
