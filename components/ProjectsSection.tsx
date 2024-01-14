import React from "react"
import Image from "next/image"
import Link from "next/link"
// import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Git Repositories UI - Next JS",
    description:
      "It is a web app that buit using NextJS-13. It is used to find repositories, add new repositories etc.",
    image: "/nextjs-gitclone.png",
    github: "https://github.com/Himanshu-311999/Next-JS-App",
    link: "https://next-js-app-rust-three.vercel.app/ ",
  },
  {
    name: "CineVerse",
    description: "CineVerse is a Movie app that was built using the React & Redux-Toolkit.",
    image: "/React-Redux-Movie-App.png",
    github: "https://github.com/Himanshu-311999/React-Redux-Toolkit-Movie",
    link: "https://himanshu-reduxtoolkit-movie-app.netlify.app/",
  },
  {
    name: "Budget Tracker",
    description:
      "This is a simple web application bulit using React-16. It is used to track your monthly budget.",
    image: "/Budget-Tracker.png",
    github: "https://github.com/Himanshu-311999/Budget-Tracker",
    link: "https://himanshu-budget-tracker.netlify.app",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              {/* <SlideUp offset="-300px 0px -300px 0px"> */}
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              {/* </SlideUp> */}
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
