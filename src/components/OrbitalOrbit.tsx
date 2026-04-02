import React from "react";

// Example icons (replace with your own SVGs or images)
const icons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
];

export default function OrbitalOrbit({
  iconList = icons.slice(0, 6), // default to 6 icons
  size = 320, // px, will scale responsively
  centerContent = <span className="font-bold text-lg">LOGO</span>,
}: {
  iconList?: string[];
  size?: number;
  centerContent?: React.ReactNode;
}) {
  return (
    <div
      className="relative flex items-center justify-center mx-auto"
      style={{ width: size, height: size, maxWidth: "100%" }}
    >
      {/* Central static circle */}
      <div
        className="flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
        style={{ width: size * 0.32, height: size * 0.32, minWidth: 56, minHeight: 56 }}
      >
        {centerContent}
      </div>
      {/* Orbiting icons */}
      <div
        className="absolute inset-0 animate-orbit-spin"
        style={{
          width: size,
          height: size,
        }}
      >
        {iconList.map((icon, i) => {
          const angle = (360 / iconList.length) * i;
          return (
            <div
              key={icon + i}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(${size * 0.39}px) rotate(-${angle}deg)`
              }}
            >
              <div
                className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-orbit-anti-spin"
                style={{ animationDelay: "0s" }}
              >
                <img src={icon} alt="icon" className="w-7 h-7 md:w-9 md:h-9 object-contain" />
              </div>
            </div>
          );
        })}
      </div>
      {/* Orbit path (invisible, but for reference you can add a border) */}
      {/* <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 pointer-events-none" style={{ width: size, height: size }} /> */}
    </div>
  );
}
