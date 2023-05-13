import React from 'react'
import Navbar from './Navbar'
import Hero from "./Hero";
import Footer from './Footer';
import Aircontain from './Aircontain';

const Air = () => {
  return (
    <div>
      <Navbar/>
      <Hero 
      img = 'https://cdn.downtoearth.org.in/uploads/0.66645700_1436375710_hazardous-air-pollution.jpg'
      heading = 'Air Pollution' 
      title = 'Less air pollution is the answer to a healthy life solution.'/>
      <Aircontain/>
      <Footer 
      firstHeading = 'Earth'
      lastHeading = 'Pollution'
      contact = '+91 7499833141'
      firstLocation = '32 Shirala'
      lastLocation = 'Maharastra, India'
      email = 'tushardukane9@gmail.com'
      />
    </div>
  )
}

export default Air
