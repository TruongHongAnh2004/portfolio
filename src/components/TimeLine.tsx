import { Calendar, Location } from "iconsax-reactjs";

export default function Timeline() {
  return (
    <div className="mx-auto mt-15 grid grid-cols-[1fr_24px_1fr] gap-x-4 space-y-10 relative">
      <div className="justify-self-end text-left py-5 px-8 border border-gray-400 rounded-lg max-h-fit max-w-120 relative">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold font-ibm">FrontEnd Developer Intern</p>
            <p className="font-semibold font-ibm">
              VPPOS Technology Joint Stock Company
            </p>
          </div>
          <Location className="text-gray-500 [&_path]:stroke-2" />
        </div>
        <p className="text-gray-500 font-inter mt-2">
          As a member of the frontend development team, I participated in
          developing ERP Human Resources and BOS – VPPOS systems. I was
          responsible for building responsive user interfaces, integrating
          RESTful APIs, and implementing reusable components for internal
          business workflows and HR management features.
        </p>
      </div>

      {/* Line */}
      <div className="flex flex-col items-center pt-5">
        <div className="flex items-center justify-center size-6 rounded-full shadow-[0_0_12px_rgba(96,165,250,0.6)] absolute left-1/2 top-3 -translate-x-1/2 z-10">
          <div className="size-4 rounded-full bg-blue-500" />
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200" />
      </div>

      {/* Time */}
      <div className="flex items-start p-2 border border-gray-400 rounded-full gap-2 max-h-fit justify-self-start">
        <Calendar />
        <span className="font-semibold font-ibm">Jan 2026 - Present</span>
      </div>

      {/* Time */}
      <div className="flex items-start p-2 border border-gray-400 rounded-full gap-2 max-h-fit justify-self-end">
        <Calendar />
        <span className="font-semibold font-ibm">Sep 2025 - March 2026</span>
      </div>

      {/* Line */}
      <div className="flex flex-col items-center relative pt-2">
        <div className="flex items-center justify-center size-6 rounded-full shadow-[0_0_12px_rgba(96,165,250,0.6)] ">
          <div className="size-4 rounded-full bg-blue-500" />
        </div>
      </div>

      <div className="text-left py-5 px-8 border border-gray-400 rounded-lg max-h-fit max-w-120 justify-self-start">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold font-ibm">AI Research Student</p>
            <p className="font-semibold font-ibm">ETECHS Lab</p>
          </div>
          <Location className="text-gray-500 [&_path]:stroke-2" />
        </div>

        
        <p className="text-gray-500 font-inter">
          Role: Full-stack Developer and Researcher. Developed a student
          activity monitoring system us- ing Python, FastAPI, PostgreSQL,
          MongoDB, Neo4j, and YOLOv12. Built AI based activity detection and
          backend services for managing student and activity data. Con- tributed
          to scalable system architecture, API design, and maintainable project
          structure for future expansion.
        </p>
      </div>
    </div>
  );
}
