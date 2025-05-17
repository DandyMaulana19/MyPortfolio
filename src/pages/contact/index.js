import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navLinks } from "@/utils/navlink";
import {
  IconBrandGithubFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconMailFilled,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <>
      <BackgroundBeams className={"h-full"} />
      <div className="relative min-w-screen min-h-screen">
        <FloatingNav navItems={navLinks} />
        <div className="container mx-auto px-4 xl:px-48 gap-16 pt-32 md:pt-16 pb-16 flex w-full h-auto md:h-screen flex-col items-center justify-center">
          <div className="w-full text-center ">
            <h2 className="font-semibold text-5xl md:text-7xl">Reach me on</h2>
          </div>
          <div className=" w-full flex items-center gap-12 justify-around flex-row md:flex-col ">
            <div className="w-full flex items-center justify-center flex-col md:flex-row gap-16">
              <div className="border-2 box-border size-40 rounded-2xl flex flex-col gap-2 items-center justify-center bg-black hover:text-yellow-700">
                <a href="mailto:dandyainul19@gmail.com">
                  <IconMailFilled size={50} />
                  <h3 className="font-medium text-xl">Email</h3>
                </a>
              </div>
              <div className="border-2 box-border size-40 rounded-2xl flex flex-col gap-2 items-center justify-center bg-black hover:text-blue-900">
                <a
                  href="https://www.linkedin.com/in/dandy-maulana-ainul-yaqin/"
                  className="flex flex-col items-center"
                >
                  <IconBrandLinkedin size={50} />
                  <h3 className="font-medium text-xl">Linkedin</h3>
                </a>
              </div>
              <div className="border-2 box-border size-40 rounded-2xl flex flex-col gap-2 items-center justify-center bg-black hover:text-green-900">
                <IconBrandWhatsapp size={50} />
                <h3 className="font-medium text-xl">Whatsapp</h3>
              </div>
            </div>
            <div className="w-full flex items-center justify-center flex-col md:flex-row gap-16">
              <div className="border-2 box-border size-40 rounded-2xl flex flex-col gap-2 items-center justify-center bg-black hover:text-rose-900">
                <a
                  href="https://instagram.com/@dandy_m.a.y"
                  className="flex flex-col items-center"
                >
                  <IconBrandInstagram size={50} />
                  <h3 className="font-medium text-xl">Instagram</h3>
                </a>
              </div>
              <div className="border-2 box-border size-40 rounded-2xl flex flex-col gap-2 items-center justify-center bg-black hover:text-sky-700">
                <a
                  href="https://tiktok.com/@nauracode"
                  className="flex flex-col items-center"
                >
                  <IconBrandTiktok size={50} />
                  <h3 className="font-medium text-xl">Tiktok</h3>
                </a>
              </div>
              <div className="border-2 box-border size-40 rounded-2xl flex flex-col gap-2 items-center justify-center bg-black hover:text-slate-700">
                <a
                  href="https://github.com/DandyMaulana19"
                  className="flex flex-col items-center"
                >
                  <IconBrandGithubFilled size={50} />
                  <h3 className="font-medium text-xl">Github</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
