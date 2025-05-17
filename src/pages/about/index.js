import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navLinks } from "@/utils/navlink";

export default function About() {
  return (
    <>
      <BackgroundBeams className={"h-full"} />
      <div className="relative min-w-screen min-h-screen">
        <FloatingNav navItems={navLinks} />
        <div className="container mx-auto px-4 xl:px-48 gap-8 pt-32 xl:pt-16 pb-16 flex flex-col w-full h-auto md:h-screen lg:flex-row items-center justify-center">
          <div className="relative w-full md:w-5/12 h-fit xl:h-fit py-1 z-0">
            <BackgroundGradient containerClassName={"p-1"}>
              <div className="p-5 rounded-2xl bg-black border gap-3 flex flex-col items-center">
                <div className="w-full h-3/4">
                  <img
                    src="assets/Profile.png"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-full h-1/4 flex flex-col gap-2 justify-center items-center">
                  <h1 className="text-xl md:text-lg font-semibold">
                    Dandy Maulana Ainul Yaqin
                  </h1>
                  <button className="bg-slate-800 z-[0] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                      <span>Resume</span>
                      <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.75 8.75L14.25 12L10.75 15.25"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                  </button>
                </div>
              </div>
            </BackgroundGradient>
          </div>
          <div className="w-full h-fit items-center flex-col flex gap-6">
            <div className="w-full flex gap-3 flex-col justify-center lg:px-4">
              <div className="w-full">
                <h1 className="font-semibold text-4xl">Summary</h1>
              </div>
              <div className="w-full text-justify">
                Hi, i'm Dandy 👋 <br /> I'm a fullstack developer who learns
                quickly and has a strong interest in acquiring new skills. I'm
                passionate about crafting seamless interfaces and powerful
                backends to shape the digital frontier. I'm proficient in modern
                frameworks and libraries like Next.js, Express.js, Tailwind CSS,
                Bootstrap, Laravel, and more. Recently. I'm also expanding my
                expertise into the world of Quality Assurance (QA),
                experimenting with automation testing frameworks such as
                Cypress, TestNG, and others to enhance software quality and
                reliability.
              </div>
            </div>
            <div className="w-full flex gap-3 justify-center flex-col lg:px-4">
              <div className="w-full">
                <h1 className="font-semibold text-4xl">Education</h1>
              </div>
              <div className="w-full">
                I'm a student at Telkom University Surabaya majoring in software
                engineering
              </div>
            </div>
            <div className="w-full flex gap-3 justify-center flex-col lg:px-4">
              <div className="w-full">
                <h1 className="font-semibold text-4xl">Tools</h1>
              </div>
              <div className="w-full">JavaScript, TypeScript, Java, PHP</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
