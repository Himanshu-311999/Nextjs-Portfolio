"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link as ScrollLink,  LinkProps  } from "react-scroll"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/Himanshu-Img.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Himanshu!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            based in Pune. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          <ScrollLink
            to="projects"
            className="text-neutral-100 cursor-pointer font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </ScrollLink>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
      <div onClick={scrollToAbout} className="cursor-pointer">
        <HiArrowDown size={35} className="animate-bounce" />
      </div>
      </div>
    </section>
  )
}

export default HeroSection
