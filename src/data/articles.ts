import { title } from 'process';

export interface LinkCardProps {
  image: string;
  title: string;
  altTitle?: string;
  time: [Date, Date?] | Date;
  shortDesc: string;
  chapters: {
    title?: string;
    content: string[];
  }[];
  href?: string;
  lastUpdated: Date;
}

export const articleData: LinkCardProps[] = [
  {
    image: '/articles/texicon.png',
    title: 'Texicon AS',
    altTitle: 'Co-founder & Developer',
    time: [new Date('2024-01-01'), new Date('2025-06-30')],
    shortDesc:
      'An IT-consulting company I co-founded at the start of 2024. It has since gained considerable momentum, and completed multiple projects \
      for various clients ranging from websites and apps, to designs and general IT-support.',
    chapters: [
      {
        content: [
          'Texicon AS is the IT-consulting company I co-founded at the start of 2024, \
          being a developer and board member through June 2025. We have built multiple websites, apps, and designs for various customers, and also \
          provided general IT-support for our clients. Texicon is always looking \
          for new projects to take on, so contact us at <a className="text-blue-400" href="https://texicon.no" target="_blank" rel="noopener noreferrer">texicon.no</a> to learn more about us \
          and our services!',
        ],
      },
      {
        title: 'Motivations',
        content: [
          'I started Texicon AS because I wanted to build something from the ground up. I wanted to create a company that would provide high-quality IT-consulting services to clients of various sizes, and I wanted to do it with a team of like-minded individuals who shared my passion for technology and innovation.',
          'There was also the grudge that today\'s digital standards for quality were not met by most companies. Despite having more than enough resources for improvement, many banks still use technology and languages from the 70s. Therefore, Texicon AS became a testament to show that it is \'not that hard\' to build digital products that meet the standards of user expectations.',
        ],
      },
      {
        title: 'Technologies',
        content: [
          'At Texicon AS, we use a variety of modern technologies to build our products. Here are just some of the technologies I personally got hands-on experience with at Texicon AS:',
          '<span className="font-bold">Frontend</span>  : Flutter, React, TypeScript, Next.js, Tailwind CSS',
          '<span className="font-bold">Backend</span>   : TypeScript, Rust, PostgreSQL, Prisma, tRPC',
          '<span className="font-bold">DevOps</span>    : Docker, GitHub Actions, Railway',
        ],
      }
    ],
    lastUpdated: new Date('2025-11-01'),
  },
  {
    image: '/articles/drift.png',
    title: 'TIHLDE Drift',
    time: [new Date('2024-08-01')],
    altTitle: 'Nestleder',
    shortDesc:
      'A voluntary position I have held since August 2024 at my student organization - TIHLDE. Drift is responsible for (almost) all of TIHLDE\'s IT-systems. This includes work within website-hosting, service-provisioning, virtual machines, servers, networking, DNS resolving, databases, and cybersecurity.',
    chapters: [
      {
        content: [
          'TIHLDE Drift is the IT-department of TIHLDE, my student organization at NTNU. As nestleder (deputy leader) of Drift since May 2025, I am responsible for overseeing the management and maintenance of TIHLDE\'s IT-systems. This includes everything from website-hosting and service-provisioning, to virtual machines, servers, networking, DNS resolving, databases, and cybersecurity.',
          'In my role, I have gained valuable experience in IT-management, teamwork, and leadership. I have also had the opportunity to work with a variety of technologies and systems, which has helped me to further develop my technical skills.',
        ]
      },
      {
        title: 'Learning what my education lacks',
        content: [
          'While studying Software Engineering at NTNU, I have found that there are certain practical aspects of IT and software development that are not covered in depth in the curriculum. Through my involvement with TIHLDE Drift, I have been able to gain hands-on experience in areas such as server management, networking, and cybersecurity, which are crucial skills for any software developer, yet are often overlooked in traditional education.',
          'This practical experience has complemented my academic studies and has provided me with a more well-rounded understanding of the field. It has also helped me to develop problem-solving skills and the ability to work effectively in a team environment.',
        ]
        
      }
    ],
    lastUpdated: new Date('2025-11-01'),
  },
  {
    image: '/articles/itk.png',
    title: 'IT-komiteen',
    altTitle: 'Serveradministrator',
    time: [new Date('2023-09-01'), new Date('2024-03-31')],
    shortDesc:
      'ITK is a voluntary position I held between September 2023 and March 2024 at Studentersamfundet i Trondhjem. IT-komiteen is responsible for all IT systems at Samfundet, such as websites, servers, server hardware, virtual machines, access cards, memberships, hosting, networking, IT-support, work-computers, and databases. I held the position of serveradministrator, managing seven on-prem servers running Debian.',
    chapters: [
      {
        content: [
          'IT-komiteen (ITK) is the IT-department of Studentersamfundet i Trondhjem, the student society in Trondheim. As a serveradministrator in ITK from September 2023 to March 2024, I was responsible for managing and maintaining seven on-prem Debian servers. These servers were used for a variety of purposes, including hosting websites, managing memberships, and providing IT-support to members of the student society.',
          'During my time in ITK, I gained valuable experience in server management, networking, and IT-support. I also had the opportunity to work with a team of extremely knowledgable and dedicated volunteers who were passionate about technology and committed to providing high-quality IT services to the student society.',
        ],
      },
      {
        title: 'Managing on-prem servers',
        content: [
          'Being the serveradministrator, I was responsible for ensuring that the servers were running smoothly and efficiently. I also had the privilege of orchestrating seven upgrades from Debian 11 to Debian 12 on all our on-prem servers, running a plethora of services. With only one night of planned downtime, the upgrade was a success.',
        ],
      }
    ],
    lastUpdated: new Date('2025-11-01'),
  },
  {
    image: '/articles/ntnu.png',
    title: 'Software Engineering',
    time: [new Date('2023-08-15')],
    shortDesc:
      'I am currently studying for a Bachelor\'s Degree in Software Engineering at NTNU, and I am expected to graduate in 2026.',
    chapters: [],
    href: 'https://www.ntnu.no/studier/bidata/systemutvikling',
    lastUpdated: new Date('2025-03-24'),
  },
].toSorted((a, b) => {
  const aEnd = Array.isArray(a.time) ? a.time[1] ?? new Date() : a.time;
  const bEnd = Array.isArray(b.time) ? b.time[1] ?? new Date() : b.time;
  return bEnd.getTime() - aEnd.getTime();
});
