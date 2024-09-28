"use client";

import React from "react"
import Image from "next/image"
import Stars from "@/components/Particles"

const skills = [
  { skill: "Java" },
  { skill: "CSS" },
  { skill: "HTML" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Node.js" },
  { skill: "GitHub" },
]

export default function AboutHome() {
  return (
    <section id="About">
      <div className="particles">
        <Stars />
      </div>
      <div style={{marginTop: 100, marginLeft:100, marginRight:100}} className="content my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-white text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="text-white text-center flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <p>
              Hi, I am Jiaming and I am a software engineer
              based in Seattle, WA.
            </p>
            <br />
            <p>
              I am currently a third year student at the University of Washington
              studying Computer Science, planning to graduate by 2026. My current
              technical interests are artificial intelligence and software development.
              I am always on the lookout for opportunities that can have real world impact.
            </p>
            <br />
            <p>
              I want to keep challenging myself and keep up my drive to continue pursuing distant
              goals I have set for myself in the future. Please contact me at jz050701@uw.edu
              if you have any questions.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            
          <Image
              src="/photo.jpg"
              alt=""
              width={225}
              height={125}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 rounded-[20px] object-cover"
            />
            <h1 className="text-2xl font-bold mb-6">Technical Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
