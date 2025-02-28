import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/image_6483441 (1).JPG";
import code from "../public/code.png";
import design from "../public/design.png";
import teamwork from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/shopsy.png";
import comingSoon from "../public/comming3.jpg";

import { ProjectCard } from "./components/ProjectCard";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
      <title>Rosella Echeruo | Portfolio</title>
  <meta name="description" content="Welcome to the portfolio of Rosella Echeruo, a passionate Frontend developer." />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Rosella Echeruo | Portfolio" />
  <meta property="og:description" content="Explore my work, projects, and skills in Frontend development and design." />
  <meta property="og:image" content="/image_6483441 (1).JPG" />
  <meta property="og:url" content="https://yourwebsite.com" />

  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Rosella Echeruo | Portfolio" />
  <meta name="twitter:description" content="Discover my projects and expertise in development and design." />
  <meta name="twitter:image" content="/image_6483441 (1).JPG" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-5 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Rosella</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/rosella-Cv.pdf"
                   download="Rosella_Resume.pdf"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Rose Echeruo
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Frontend Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am a passionate Frontend Developer with a strong eye for design
              and a commitment to crafting seamless user experiences. With
              expertise in HTML, CSS, JavaScript and React, I build responsive,
              high-performance web applications. I am open to internship
              opportunity where i can thrive in collaborative environments,
              continuously learning new technologies to stay ahead of industry
              trends!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://www.linkedin.com/in/rosella-echeruo/"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>

              <a
                href="https://github.com/RosellaTech"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGithub />
              </a>

              <a
                href="https://www.instagram.com/rosella_official"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillInstagram />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div>
            <h3 className="text-[30px] lg:text-[70px] py-1 dark:text-white text-center font-meduim">
              What I Offer
            </h3>
            <p className="text-md py-2 leading-8 text-center text-gray-800 dark:text-gray-200">
              As a junior front-end developer, I’m passionate about building
              engaging and easy-to-use websites that enhance user
              experiences,using modern coding languages to build the structure,
              style, and interactive elements that users see directly on a
              webpage, while Collaborating with like minded team
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Responsive Design
              </h3>
              <p className="py-2">
                Ensuring websites are fully responsive and optimized for various
                screen sizes for a seamless user experience.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I Use</h4>
              <p className="text-gray-800 py-1">HTML & CSS</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">Media Queries</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Front-End Development
              </h3>
              <p className="py-2">
                Building dynamic and interactive web applications using modern
                front-end technologies.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I Use</h4>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">TypeScript</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={teamwork} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Team Collaboration
              </h3>
              <p className="py-2">
                Working efficiently within teams to develop projects, maintain
                clear communication, and contribute to a productive work
                environment.
              </p>
              <h4 className="py-4 text-teal-600">Skills I Bring</h4>
              <p className="text-gray-800 py-1">Effective Communication</p>
              <p className="text-gray-800 py-1">Problem Solving</p>
              <p className="text-gray-800 py-1">Adaptability</p>
              <p className="text-gray-800 py-1">Version Control (Git)</p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-[30px] lg:text-[70px] py-1 dark:text-white mb-[60px] text-center font-meduim ">
            My Recent Projects
          </h2>

          <div className="flex flex-col gap-10 gap-y-20 py-10 lg:flex-row lg:flex-wrap">
            <ProjectCard
              image={web1}
              title={"E-commerce Website"}
              description={`A responsive e-commerce web app built with Nextjs, React, Tailwind, HTML, CSS`}
              link="https://rosella-shopsy.onrender.com"
            />

            <ProjectCard
              image={comingSoon}
              title={"Event Planer App (Coming soon)"}
              description={` Currently work on an event planner websit with React, Tailwind, HTML, CSS`}
              link="#"
            />

            <ProjectCard
              image={comingSoon}
              title={"Weather App (Coming soon)"}
              description={` Another ongong project for a weather websit with React,
                Tailwind, HTML, CSS`}
              link="#"
            />

            <ProjectCard
              image={comingSoon}
              title={"Fitness Tracker (Coming soon)"}
              description={` Fitness Tracker using HTML, CSS`}
              link="#"
            />

            <ProjectCard
              image={comingSoon}
              title={"A Recipe Finder (Coming soon)"}
              description={` A Recipe Finder, developed 
                where users can search for recipe for different types of foods`}
              link="#"
            />

            <ProjectCard
              image={comingSoon}
              title={" ReactJS Weather App (Coming soon)"}
              description={` ReactJS Weather application that allows users to search to know the weather forcase`}
              link="#"
            />

          </div>
        </section>
        <section className="py-10">
          <h2 className="text-[30px] lg:text-[70px] py-1 dark:text-white mb-[60px] text-center font-meduim ">
            My Programming Skills
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-[100px]">
            <div className="h-300px bg-[#222c3a] text-white px-4 py-[40px] lg:py-[50px] border-none rounded-md text-center">
              <Image
                src={"/nextjs.png"}
                width="100"
                height="100"
                className="h-[100px] w-[100px]"
              />
              <h3 className="font-medium text-2xl lg:text-3xl mt-[35px]">
                NextJs
              </h3>
            </div>

            <div className="h-300px bg-[#222c3a] text-white px-4 py-[40px] lg:py-[50px] border-none rounded-md text-center">
              <Image
                src={"/React.webp"}
                width="100"
                height="100"
                className="h-[100px] w-[100px]"
              />
              <h3 className="font-medium text-2xl lg:text-3xl mt-[35px]">
                React
              </h3>
            </div>

            <div className="h-300px bg-[#222c3a] text-white px-4 py-[40px] lg:py-[50px] border-none rounded-md text-center">
              <Image
                src={"/redux.svg"}
                width="100"
                height="100"
                className="h-[100px]"
              />
              <h3 className="font-medium text-2xl lg:text-3xl mt-[35px]">
                Redux
              </h3>
            </div>

            <div className="h-300px bg-[#222c3a] text-white px-4 py-[40px] lg:py-[50px] border-none rounded-md text-center">
              <Image
                src={"/js.png"}
                width="100"
                height="100"
                className="h-[100px] w-[100px]"
              />
              <h3 className="font-medium text-2xl lg:text-3xl mt-[35px]">
                JavaScript
              </h3>
            </div>

            <div className="h-300px bg-[#222c3a] text-white px-4 py-[40px] lg:py-[50px] border-none rounded-md text-center">
              <Image
                src={"/css.svg"}
                width="100"
                height="100"
                className="h-[100px] w-[100px]"
              />
              <h3 className="font-medium text-2xl lg:text-3xl mt-[35px]">
                CSS
              </h3>
            </div>

            <div className="h-300px bg-[#222c3a] text-white px-4 py-[40px] lg:py-[50px] border-none rounded-md text-center">
              <Image
                src={"/html.png"}
                width="100"
                height="100"
                className="h-[100px] w-[100px]"
              />
              <h3 className="font-medium text-2xl lg:text-3xl mt-[35px]">
                HTML
              </h3>
            </div>

            <div className="h-300px bg-[#222c3a] text-white px-4 py-[40px] lg:py-[50px] border-none rounded-md text-center">
              <Image
                src={"/git.png"}
                width="100"
                height="100"
                className="h-[100px] w-[100px]"
              />
              <h3 className="font-medium text-2xl lg:text-3xl mt-[35px]">
                Git
              </h3>
            </div>

            <div className="h-300px bg-[#222c3a] text-white px-4 py-[40px] lg:py-[50px] border-none rounded-md text-center">
              <Image
                src={"/bootstrap.png"}
                width="100"
                height="100"
                className="h-[100px] w-[100px]"
              />
              <h3 className="font-medium text-2xl lg:text-3xl mt-[35px]">
                Bootstrap
              </h3>
            </div>

            <div className="h-300px bg-[#222c3a] text-white px-4 py-[40px] lg:py-[50px] border-none rounded-md text-center">
              <Image
                src={"/tailwind.png"}
                width="100"
                height="100"
                className="h-[100px]"
              />
              <h3 className="font-medium text-2xl lg:text-3xl mt-[35px]">
                Tailwind
              </h3>
            </div>

            <div className="h-300px bg-[#222c3a] text-white px-4 py-[40px] lg:py-[50px] border-none rounded-md text-center">
              <Image
                src={"/rest-api-icon.png"}
                width="100"
                height="100"
                className="h-[100px]"
              />
              <h3 className="font-medium text-2xl lg:text-3xl mt-[35px]">
                Rest API
              </h3>
            </div>

            <div className="h-300px bg-[#222c3a] text-white px-4 py-[40px] lg:py-[50px] border-none rounded-md text-center">
              <Image
                src={"/render.webp"}
                width="100"
                height="100"
                className="h-[100px]"
              />
              <h3 className="font-medium text-2xl lg:text-3xl mt-[35px]">
                Render
              </h3>
            </div>
          </div>
        </section>
      </main>

      <footer className="h-[500px] bg-[#222c3a] flex items-center justify-center px-5">
        <div className="">

        <p className="text-white text-[30px] lg:text-[50px] font-bold text-center mb-10">Ready To Collaborate With Me?</p>

<a href="https://www.linkedin.com/in/rosella-echeruo/"
                rel="noreferrer"
                target="_blank">
        <button className="bg-gradient-to-r block
        flex items-center gap-2
         w-auto mx-auto from-cyan-500 text-2xl to-teal-500 text-white px-10 py-5 border-none rounded-md mt-5"   >
      
                <AiFillLinkedin size={35} />
               Let's Connect
      </button>
      </a>
      </div>
      </footer>
    </div>
  );
}
