export interface LinkCardProps {
  image: string;
  title: string;
  altTitle?: string;
  shortDesc: string;
  chapters: {
    title?: string;
    content: string[];
  }[];
  href: string;
  lastUpdated: Date;
}

export const articleData: LinkCardProps[] = [
  {
    image: '/articles/texicon.png',
    title: 'Texicon AS',
    altTitle: '/* building a company from the ground up */',
    shortDesc:
      'An IT-consulting company I co-founded at the start of 2024. We have since gained considerable momentum, and we have completed multiple projects for various clients ranging from websites and apps, to designs and general IT-support, and there are no plans of stopping there.',
    chapters: [
      {
        content: [
          'Texicon AS is the IT-consulting company I co-founded at the start of 2024. Since starting we have built multiple websites, apps, and designs for various clients. We have also provided general IT-support for our clients, and we are always looking for new projects to take on. Visit us at texicon.no to learn more about us and our services!',
        ],
      },
      {
        title: 'Motivations',
        content: [
          'I started Texicon AS because I wanted to build something from the ground up. I wanted to create a company that would provide high-quality IT-consulting services to clients of various sizes, and I wanted to do it with a team of like-minded individuals who shared my passion for technology and innovation.',
          'There was also the grudge that today\'s digital standards for quality were not met by most companies, many of which have more than enough resources for improvement, yet banks still use technology and languages from the 70s. Therefore, Texicon AS became a testament to show that it is \'not that hard\' to build digital products that meet the standards of user expectations.',
        ],
      }
    ],
    href: 'https://texicon.no/',
    lastUpdated: new Date('2025-03-24'),
  },
  {
    image: '/articles/drift.png',
    title: 'Drift',
    shortDesc:
      'A voluntary position I have held since August 2024 at my student organization, TIHLDE. Drift is responsible for all IT systems such as websites, servers, virtual machines, hosting, networking, and databases, pretty much everything except TIHLDE\'s main website (tihlde.org).',
    chapters: [],
    href: 'https://tihlde.org/grupper/drift/',
    lastUpdated: new Date('2025-03-24'),
  },
  {
    image: '/articles/itk.png',
    title: 'IT-komiteen',
    shortDesc:
      'Another voluntary position I held between September 2023 and March 2024 at Studentersamfundet i Trondhjem. IT-komiteen is responsible for all IT systems at Samfundet, such as websites, servers, server hardware, virtual machines, access cards, memberships, hosting, networking, IT-support, work-computers, and databases. I held the position of serveradministrator, managing seven servers running Debian.',
    chapters: [],
    href: 'https://itk.samfundet.no/',
    lastUpdated: new Date('2025-03-24'),
  },
  {
    image: '/articles/ntnu.png',
    title: 'Bachelor\'s Degree in Software Engineering',
    shortDesc:
      'I am currently studying for a Bachelor\'s Degree in Software Engineering at NTNU, and I am expected to graduate in 2026.',
    chapters: [],
    href: 'https://www.ntnu.no/studier/bidata/systemutvikling',
    lastUpdated: new Date('2025-03-24'),
  },
];
