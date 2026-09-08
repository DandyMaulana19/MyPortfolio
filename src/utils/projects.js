import {
  IconBrandLaravel,
  IconBrandLivewire,
  IconBrandTailwind,
  IconBrandBootstrap,
  IconBrandNodejs,
  IconBrandReactNative,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandGolang,
  IconBrandFlutter,
  IconBrandCSharp,
} from "@tabler/icons-react";

import {
  SiExpress,
  SiFastify,
  SiFirebase,
  SiFlutter,
  SiMinio,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";

const TechIcons = (icons) =>
  icons.map((Icon, index) => <Icon key={index} size={24} strokeWidth={1} />);

export const projects = [
  {
    title: "UKM CODER Website",
    description:
      "ERP, LMS and profile website for UKM CODER Telkom University Surabaya",
    role: "Fullstack Engineer",
    header: (
      <img
        src="assets/Coder.webp"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        alt="Showcase 1"
      />
    ),
    icons: TechIcons([
      IconBrandLivewire,
      IconBrandLaravel,
      IconBrandTailwind,
      IconBrandMysql,
    ]),
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Mesti Minum",
    description: "UMKM marketplace",
    role: "Fullstack Engineer",
    header: (
      <img
        src="assets/MestiMinum.webp"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        alt="Showcase 2"
      />
    ),
    icons: TechIcons([
      IconBrandLivewire,
      IconBrandLaravel,
      IconBrandTailwind,
      IconBrandMysql,
    ]),
    className: "md:col-span-1",
  },
  {
    title: "Didimo",
    description: "Health checking website with IoT integration.",
    role: "Fullstack Engineer",
    header: (
      <img
        src="assets/Didimo.webp"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        alt="Showcase 3"
      />
    ),
    icons: TechIcons([IconBrandLaravel, IconBrandBootstrap, IconBrandMysql]),
    className: "md:col-span-1",
  },
  {
    title: "Panjunan E-Government",
    description: "E-Government website for Gresik Panjunan Village",
    role: "Fullstack Engineer",
    header: (
      <img
        src="assets/Panjunan.webp"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        alt="Showcase 4"
      />
    ),
    icons: TechIcons([
      IconBrandLaravel,
      IconBrandNodejs,
      IconBrandTailwind,
      IconBrandMysql,
    ]),
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Sikeang CODER Mobile App",
    description: "UKM CODER Telkom University Surabaya mobile app",
    role: "Mobile and Backend Engineer",
    header: (
      <img
        src="assets/Sikeang.webp"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        alt="Showcase 5"
      />
    ),
    icons: TechIcons([IconBrandReactNative, IconBrandNodejs, IconBrandMongodb]),
    className: "md:col-span-2",
  },
  {
    title: "Self Portfolio",
    description: "My personal website",
    role: "Software Engineer",
    header: (
      <img
        src="assets/Portfolio.webp"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        alt="Showcase 6"
      />
    ),
    icons: TechIcons([IconBrandNextjs, IconBrandTailwind]),
    className: "md:col-span-2",
  },
  {
    title: "Kalla Friends App and Backoffice",
    description:
      "Kalla Group's integrated customer loyalty mobile app and backoffice",
    role: "Quality Assurance Engineer",
    header: (
      <img
        src="assets/Kalla.png"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        alt="Showcase 7"
      />
    ),
    icons: TechIcons([
      IconBrandNextjs,
      IconBrandTailwind,
      IconBrandFlutter,
      IconBrandCSharp,
    ]),
    className: "md:col-span-2",
  },
  {
    title: "Pupuk Indonesia Payroll App ",
    description: "Payroll App for Pupuk Indonesia Holding Company",
    role: "Quality Assurance Engineer",
    header: (
      <img
        src="assets/Payroll.png"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        alt="Showcase 8"
      />
    ),
    icons: TechIcons([IconBrandNextjs, IconBrandTailwind, IconBrandGolang]),
    className: "md:col-span-2",
  },
  {
    title: "Leleku catfish cultivation monitoring system",
    description:
      "Integrated IoT mobile app catfish cultivation and village dashboard monitoring system for Kebakalan Sidoarjo Village",
    role: "Backend Engineer",
    header: (
      <img
        src="assets/Leleku.webp"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        alt="Showcase 8"
      />
    ),
    icons: TechIcons([
      IconBrandNextjs,
      IconBrandTailwind,
      SiFlutter,
      SiFastify,
      SiFirebase,
      SiRedis,
      SiMinio,
      SiPostgresql,
    ]),
    className: "md:col-span-2",
  },
  {
    title: "PT Sepanjang Pangan Jaya Enterprise App System",
    description:
      "Enterprise resource planning app system for PT Sepanjang Pangan Jaya",
    role: "Lead Backend Engineer",
    header: (
      <img
        src="assets/SPJ.webp"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        alt="Showcase 8"
      />
    ),
    icons: TechIcons([
      IconBrandNextjs,
      IconBrandTailwind,
      SiExpress,
      SiPostgresql,
    ]),
    className: "md:col-span-2",
  },
  {
    title: "Jagat Litera Publishing Management System ",
    description: "Publishing Management System for Jagat Litera Publishing",
    role: "Fullstack Engineer",
    header: (
      <img
        src="assets/Jagat-litera.webp"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        alt="Showcase 8"
      />
    ),
    icons: TechIcons([
      IconBrandNextjs,
      IconBrandTailwind,
      IconBrandGolang,
      IconBrandMysql,
    ]),
    className: "md:col-span-4",
  },
];
