"use client";

import StackIcon from "tech-stack-icons";

export default function LogoMarquee() {
  const logos = [
    {
      name: "ReactJS", icon: <StackIcon name="react" />,
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
    { name: "Tan Stack Query", icon: <StackIcon name="tanstack" /> },
    { name: "Zustand", icon: <StackIcon name="zustand" /> },
    { name: "Redux Toolkit", icon: <StackIcon name="redux" /> },
  ];

  return (
    <div className="overflow-hidden py-5 px-0 flex gap-4 w-full shrink-0 group">
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
  );
}
