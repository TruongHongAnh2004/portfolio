import { Building4 } from "iconsax-reactjs";

export default function Projects() {
  return (
    <div className="flex justify-center">
      <div className="w-6/10 py-10 flex gap-10">
        {/* CARD 1 */}
        <div
          className="bg-gray-100  hover:border hover:border-blue-500 shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1 hover:shadow-card-hover hover:text-blue-600
    px-8 py-5"
        >
          <div className="text-lg">
            <p className="text-orange-500 bg-orange-100 py-1 px-2 rounded-lg font-ibm font-extrabold inline-block">
              March 2026 - June 2026
            </p>
            <p className="text-blue-600 mt-1 font-ibm font-semibold">ERP Human Resources</p>
          </div>

          <div className="flex items-center gap-3">
            <p className="font-bold text-xl font-ibm mt-2">
              VPPOS Technology Joint Stock Company
            </p>
            <Building4 />
          </div>

          <p className="text-gray-500 font-inter mt-5">
            Developed frontend features for an enterprise HR management system
            handling rewards & discipline, training, leave management, and
            onboarding/offboarding processes using React, Vite, Microfrontend
            architecture, Zustand, TanStack Query, Shadcn UI and Tailwind CSS.
            Implemented reusable UI components, form validation,
            internationalization (i18n), and RESTful API integration with the
            company design system. Contributed to improving user experience,
            maintainability, and scalable front-end architecture.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className="bg-gray-100  hover:border hover:border-blue-500 shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1 hover:shadow-card-hover hover:text-blue-600
    px-8 py-5"
        >
          <div className="">
              <p className="text-orange-500 bg-orange-100 py-1 px-2 rounded-lg font-extrabold font-ibm inline-block">
                January 2026 - March 2026
              </p>
            <p className="text-blue-600 mt-1 font-ibm font-semibold">BOS - VPPOS</p>
          </div>

          <div className="flex items-center gap-3">
            <p className="font-bold text-xl font-ibm mt-2">
              VPPOS Technology Joint Stock Company
            </p>
            <Building4 />
          </div>

          <p className="text-gray-500 font-inter mt-5">
            Developed frontend features for an internal business operation
            system supporting promotion management, marketing campaigns, and
            logistics workflows using React, Vite, Microfrontend architecture,
            Redux Toolkit, Tailwind CSS, and RESTful API integration.
            Contributed to the Promotion & Marketing and Delivery Management
            modules by building responsive UI components and managing
            application state with the company design system. Helped improve
            workflow efficiency, maintainability, and scalable front-end
            structure.
          </p>
        </div>
      </div>
    </div>
  );
}
