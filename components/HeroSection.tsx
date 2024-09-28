"use client" // this is a client component
import React from "react"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { useEffect } from 'react';

import Stars from "@/components/Particles.js"

const HeroSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      {
        threshold: 0.3,
      }
    );
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach((el) => observer.observe(el));
  }, []);  

  return (
    <section id="home">
      <div className="particles">
        <Stars />
      </div>
      <div className="fade content flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-6xl font-bold mt-6 md:mt-0 md:text-6xl text-center grad overflow-hidden"> Hello there, </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl text-center" style={{color: 'white'}}>
            Welcome to my Blog!
          </p>
        </div>
      </div>
      <div className="content flex flex-row items-center text-center justify-center" style={{color: 'white'}}>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
      <div className="content flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5">
          <p className="fade text-lg mt-4 mb-6 md:text-2xl text-center" style={{color: 'white', marginTop:500}}>
            I am currently a undergraduate student at the University of Washington, planning 
            to graduate with a B.S. in Computer Science by 2026. My current
            technical interests are artificial intelligence and software development.
            I am always on the lookout for opportunities that can have real world impact.
          </p>
        </div>
      </div>
      <div className="content flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5"  style={{marginTop:500}}>
          <p className="fade text-lg mt-4 mb-6 md:text-2xl text-center" style={{color: 'white'}}>
            See my blogs for my ephiphanies and advice I have collected through my life.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
