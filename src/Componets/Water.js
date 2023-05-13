import React from 'react'
import Navbar from './Navbar'
import Hero from "./Hero";
import Footer from './Footer';
import Watercontain from './Watercontain';

const Water = () => {
  return (
    <div>
      <Navbar/>
      <Hero 
      img = "https://media.istockphoto.com/id/876880612/photo/water-pollution-in-river.jpg?s=612x612&w=0&k=20&c=-KqpWqa3NOeZrRKnoYQz9beKXMGWtJyEmf3fQGwAeBE="
      heading = 'Water Pollution' 
      title = 'A day without water is hard, so dont let it become your future.'/>
      <Watercontain/>
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

export default Water
