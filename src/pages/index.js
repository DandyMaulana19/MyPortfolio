import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navLinks } from "@/utils/navlink";
import TypeIt from "typeit-react";
import ScrollFloat from "@/components/utils/ScrollFloat";
import { BentoGrid } from "@/components/utils/BentoGrid";
import { projects } from "@/utils/projects";

export default function Home() {
  return (
    <>
      <BackgroundBeams className={"h-full"} />
      <div className="relative min-w-screen min-h-screen">
        <FloatingNav navItems={navLinks} />
        <div className="container mx-auto px-4 xl:px-48 gap-8 py-16 flex w-full h-screen flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row xl:flex-row items-center justify-center xl:gap-32 gap-12 w-full h-screen">
            <div className="xl:w-1/2 md:w-1/2  border-amber-500 w-full text-left text-wrap">
              <h1 className="text-7xl xl:text-[150px] md:text-[100px] font-bold leading-none tracking-tight text-pretty">
                Dandy
                <br />
                Maulana
              </h1>
            </div>
            <div className="flex flex-col  border-amber-200 sm:gap-6 w-full md:w-1/2 xl:w-1/2 h-auto justify-center items-end ">
              <div className=" w-full">
                <svg
                  stroke="#ffffff"
                  fill="#ffffff"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "rotate(140deg)", alignSelf: "center" }}
                >
                  <path d="M18.655 10.405a.75.75 0 0 1-1.06 0l-4.97-4.97v14.44a.75.75 0 0 1-1.5 0V5.435l-4.97 4.97a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06Z"></path>
                </svg>
              </div>
              <span className="text-right w-10/12 text-sm md:text-base md:w-full">
                <TypeIt>
                  Code enthusiast conjuring code magic for captivating digital
                  experiences. Passionate about crafting seamless interfaces and
                  powerful backend to shape the digital frontier.
                </TypeIt>
              </span>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="bg-white rounded-full p-2">
              <a href="#projects">
                <img
                  className="w-6 rounded-full"
                  src="/assets/scroll_down.gif"
                  alt="Scroll Down"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className="container mx-auto px-4 xl:px-48 gap-8 py-16 flex w-full h-auto flex-col items-center justify-center"
          id="projects"
        >
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            textClassName="font-semibold"
            children={"My Project"}
          ></ScrollFloat>
          <BentoGrid className="max-w-4xl mx-auto" items={projects} />
        </div>
      </div>
    </>
  );
}
