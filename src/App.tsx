import { DirectRight, Import } from "iconsax-reactjs";
import "./App.css";
import myLogo from "./assets/cute.jpg";
import LogoMarquee from "./components/Marquee";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="flex justify-center">
      <div className="flex w-300 pt-20 gap-10">
        <div className="grid content-center gap-4">
          <div className="font-bold text-7xl">
            Hi, I'm {""}
            <span className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Truong Hong Anh
            </span>
          </div>
          <p className="text-2xl mt-5 text-gray-500">
            <strong>Frontend Developer with 1 year of experience</strong>
            building responsive and user-friendly web applications using React,
            TypeScript, Next.js, Tailwind CSS, and modern frontend technologies.
            Experienced in API integration, state management, performance
            optimization, and translating Figma designs into production-ready
            applications.
          </p>

          <div className="flex gap-5">
            <button className="rounded-full bg-black text-white flex items-center gap-2 px-8 py-5 mt-10">
              <p className="font-bold text-xl">Contact Me</p>
              <DirectRight />
            </button>

            <button className="rounded-full bg-blue-400 text-white flex items-center gap-2 px-5 py-3 mt-10">
              <p className="font-bold text-xl">Download CV</p>
              <Import />
            </button>
          </div>
        </div>

        <div className="w-300 h-120 rounded-3xl">
          <div className="box">
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
        <div>
          <p className="text-5xl font-bold text-center">
            Technological Foundation
          </p>
          <p className="text-xl mt-5 text-gray-500 text-center">
            The modern tools I use to bring products to life.
          </p>
          <LogoMarquee />
        </div>
      </div>

       <div className="mt-20">
        <div>
          <p className="text-5xl font-bold text-center">
            Professional Experience
          </p>
          <p className="text-xl mt-5 text-gray-500 text-center">
            A timeline of my professional growth from public relations to frontend development.
          </p>
        </div>
       </div>

       <Footer />
    </>
  );
}

export default App;
