import hcmue from "../assets/hcmue500.avif";
import logoHcmue from "../assets/logoHcmue.svg";

export default function Education() {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex border border-blue-200 bg-blue-50 w-300 py-10 shadow-lg">
        <div className="px-20">
          <img
            src={hcmue}
            alt="Profile Image"
            className=" min-w-122 h-auto block rounded-lg"
          />
        </div>

        <div className="w-full pr-5">
          <div className="flex justify-between items-start">
            <div>
              <img
                src={logoHcmue}
                alt="Profile Image"
                className="size-30 h-auto block rounded-lg"
              />
            </div>

            <div className="bg-red-100 py-1 px-2 rounded-lg flex items-center">
              <p className="text-red-500 font-ibm">2022 - 2026</p>
            </div>
          </div>

          <div className="mt-5">
            <p className="font-bold font-ibm text-xl">
              Ho Chi Minh University of Education
            </p>
            <p className="font-inter pt-1 text-blue-500 italic">
              Bachelor Degree of Information Technology
            </p>
            <p className="py-2 italic font-inter">Major: Software Engineering</p>
            <p className="text-gray-500 font-inter">
              Data Structures & Algorithms <br />
              Object-Oriented Programming <br />
              Database Systems <br />
              Software Engineering <br />
              Web Development
            </p>

            <p className="text-gray-500 font-inter">English: CEFR B2 Upper-Intermediate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
