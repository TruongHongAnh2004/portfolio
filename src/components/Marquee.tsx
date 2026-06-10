"use client";

import StackIcon from "tech-stack-icons";

export default function LogoMarquee() {
  const logos = [
    {
      name: "ReactJS",
      icon: <StackIcon name="react" />,
    },
    { name: "Next.js", icon: <StackIcon name="nextjs" /> },
    { name: "React Native", icon: <StackIcon name="reactnative" /> },
    { name: "TypeScript", icon: <StackIcon name="typescript" /> },
    { name: "Tailwind CSS", icon: <StackIcon name="tailwindcss" /> },
    { name: "Expo", icon: <StackIcon name="expo" /> },
    { name: "Shadcn UI", icon: <StackIcon name="shadcnui" /> },
    { name: "Micro FrontEnd", icon: <StackIcon name="microfrontend" /> },
    { name: "Git", icon: <StackIcon name="git" /> },
    { name: "GitHub", icon: <StackIcon name="github" /> },
    { name: "GitLab", icon: <StackIcon name="gitlab" /> },
    { name: "Figma", icon: <StackIcon name="figma" /> },
    { name: "Postman", icon: <StackIcon name="postman" /> },
    { name: "Ubuntu", icon: <StackIcon name= "ubuntu" />},
    { name: "Linux", icon: <StackIcon name= "linux" />},
    { name: "Tan Stack Query", icon: <StackIcon name="tanstack" /> },
    { name: "Zustand", icon: <StackIcon name="zustand" /> },
    { name: "Redux Toolkit", icon: <StackIcon name="redux" /> },
    { name: "Claude AI", icon: <StackIcon name="claude" /> },
    { name: "Cursor", icon: <StackIcon name="cursor" /> },
    { name: "ChatGPT", icon: <StackIcon name="openai" /> },
    { name: "Gemini", icon: <StackIcon name="gemini" /> }

  ];

  return (
    <div className="mt-5 flex gap-4">
      <div className="py-5 px-0 flex gap-4 shrink-0 group">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="min-h-14 min-w-40 flex items-center justify-center gap-2 p-3 rounded-xl border border-gray-300 shadow-md "
          >
            <div style={{ width: 30, height: 30 }}>{logo.icon} </div>
            <span className="text-s font-bold">{logo.name}</span>
          </div>
        ))}
      </div>

      <div className="py-5 px-0 flex gap-4 shrink-0 group">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="min-h-14 min-w-40 flex items-center justify-center gap-2 p-3 rounded-xl border border-gray-300 shadow-md "
          >
            <div style={{ width: 30, height: 30 }}>{logo.icon} </div>
            <span className="text-s font-bold">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
