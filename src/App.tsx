import { DirectRight, Import } from "iconsax-reactjs";
import "./App.css";
import myLogo from "./assets/cuteNew.avif";
import LogoMarquee from "./components/Marquee";
import Footer from "./components/Footer";
import Timeline from "./components/TimeLine";
import Education from "./components/Education";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-300 pt-20 gap-10">
          <div className="grid content-center gap-4">
            <div className="font-bold text-7xl font-ibm">
              Hi, I'm {""}
              <span className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Truong Hong Anh
              </span>
            </div>
            <p className="text-2xl mt-5 text-gray-500 font-inter">
              <strong>Frontend Developer with 1 year of experience</strong>
              building responsive and user-friendly web applications using
              React, TypeScript, Next.js, Tailwind CSS, and modern frontend
              technologies. Experienced in API integration, state management,
              performance optimization, and translating Figma designs into
              production-ready applications.
            </p>

            <div className="flex gap-5">
              <button className="rounded-full bg-black text-white flex items-center gap-2 px-8 py-3 mt-10">
                <p className="font-bold text-xl font-inter">Contact Me</p>
                <DirectRight className="[&_path]:stroke-[2.5]" />
              </button>

              <button className="rounded-full bg-blue-700 text-white flex items-center gap-2 px-5 py-3 mt-10">
                <p className="font-bold text-xl font-inter">Download CV</p>
                <Import className="[&_path]:stroke-[2.5]" />
              </button>
            </div>
          </div>

          <div>
            <div className="box w-57">
              <img
                src={myLogo}
                alt="Profile Image"
                className=" max-w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="overflow-hidden">
          <p className="text-5xl font-bold text-center font-ibm">
            Technological Foundation
          </p>
          <p className="text-xl mt-5 text-gray-500 text-center font-inter">
            The modern tools I use to bring products to life.
          </p>
          <LogoMarquee />
        </div>
      </div>

      <div className="mt-20">
        <div>
          <p className="text-5xl font-bold text-center font-ibm">
            Professional Experience
          </p>
          <p className="text-xl mt-5 text-gray-500 text-center font-inter">
            A timeline of my professional growth from public relations to
            frontend development.
          </p>
          <Timeline />
        </div>
      </div>

      <div className="mt-20">
        <p className="text-5xl font-bold text-center font-ibm">Education</p>
        <p className="text-xl mt-5 text-gray-500 text-center font-inter">
          Academic background and technical foundation in Software Engineering.
        </p>
        <Education />
      </div>

      <div className="mt-20">
        <p className="text-5xl font-bold text-center font-ibm">Projects</p>
        <p className="text-xl mt-5 text-gray-500 text-center font-inter">
          Selected projects demonstrating my technical skills and practical
          development experience.
        </p>
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
