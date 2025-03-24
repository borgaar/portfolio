export interface LinkCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  lastUpdated: Date;
}

export const work: LinkCardProps[] = [
  {
    image: "/work/texicon.png",
    title: "Texicon AS",
    description:
      "An IT-consulting company I co-founded at the start of 2024. We have since gained considerable momentum, and we have completed multiple projects for various clients ranging from websites and apps, to designs and general IT-support, and there are no plans of stopping there.",
    href: "https://texicon.no/",
    lastUpdated: new Date("2025-03-24"),
  },
  {
    image: "/work/drift.png",
    title: "Drift",
    description:
      "A voluntary position I have held since August 2024 at my student organization, TIHLDE. Drift is responsible for all IT systems such as websites, servers, virtual machines, hosting, networking, and databases, pretty much everything except TIHLDE's main website (tihlde.org).",
    href: "https://tihlde.org/grupper/drift/",
    lastUpdated: new Date("2025-03-24"),
  },
  {
    image: "/work/itk.png",
    title: "IT-komiteen",
    description:
      "Another voluntary position I held between September 2023 and March 2024 at Studentersamfundet i Trondhjem. IT-komiteen is responsible for all IT systems at Samfundet, such as websites, servers, server hardware, virtual machines, access cards, memberships, hosting, networking, IT-support, work-computers, and databases. I held the position of serveradministrator, managing seven servers running Debian.",
    href: "https://itk.samfundet.no/",
    lastUpdated: new Date("2025-03-24"),
  },
  {
    image: "/work/ntnu.png",
    title: "Bachelor's Degree in Software Engineering",
    description:
      "I am currently studying for a Bachelor's Degree in Software Engineering at NTNU, and I am expected to graduate in 2026.",
    href: "https://www.ntnu.no/studier/bidata/systemutvikling",
    lastUpdated: new Date("2025-03-24"),
  },
];
