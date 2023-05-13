import React from 'react'
import Navbar from './Navbar'
import Hero from "./Hero";
import Footer from './Footer';
import Foodcontain from './Foodcontain';

const Noise = () => {
  return (
    <div>
      <Navbar/>
      <Hero 
      img ="https://d3hnfqimznafg0.cloudfront.net/images/Article_Images/ImageForArticle_889(1).jpg"
      heading = 'Food Pollution' 
      title = 'Keep the noise down or the noise will keep you down.'/>
      <Foodcontain/>
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

export default Noise;

