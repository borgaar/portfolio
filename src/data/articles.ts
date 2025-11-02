export interface LinkCardProps {
  articleKey: string;
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

const articleData: Map<string, LinkCardProps> = new Map();

const articles = [
  {
    image: '/articles/texicon.png',
    articleKey: 'texicon-as',
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
          '<span className="font-bold">Frontend</span>  : Flutter / React / TypeScript / Next.js / Tailwind CSS',
          '<span className="font-bold">Backend</span>   : TypeScript / Rust / PostgreSQL / Prisma / tRPC',
          '<span className="font-bold">DevOps</span>    : Docker / GitHub Actions / Railway',
        ],
      }
    ],
    lastUpdated: new Date('2025-11-01'),
  } as LinkCardProps,
  {
    image: '/articles/drift.png',
    articleKey: 'tihlde-drift',
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
  } as LinkCardProps,
  {
    image: '/articles/itk.png',
    articleKey: 'it-komiteen',
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
  } as LinkCardProps,
  {
    image: '/articles/ntnu.png',
    articleKey: 'ntnu-software-engineering',
    title: 'Software Engineering',
    altTitle: 'Bachelor\'s Degree',
    time: [new Date('2023-08-15')],
    shortDesc:
      'I am currently studying for a Bachelor\'s Degree in Software Engineering at NTNU, and I am expected to graduate in June 2026.',
    chapters: [],
    href: 'https://www.ntnu.no/studier/bidata/systemutvikling',
    lastUpdated: new Date('2025-03-24'),
  } as LinkCardProps,
  {
    image: '/articles/start-code-2024.jpg',
    articleKey: 'start-code-2024',
    title: 'Winner of Start Code 2024',
    altTitle: '48h Hackathon',
    time: new Date('2024-10-25'),
    lastUpdated: new Date('2025-11-02'),
    shortDesc: 'Start Code 2024 was a 48-hour hackathon organized by Start NTNU, where teams competed to develop an innovative software solution to a case given by Enmo AS - a startup that provides a solution for improving cooperation between solarpanels and batteries using their BatteryBrain technology.',
    chapters: [
      {
        content: [
          'Start Code 2024 was an exhilarating 48-hour hackathon organized by Start NTNU, where over 20 teams of students competed to develop innovative software solutions to real-world challenges. This year, the case was provided by Enmo AS, a startup focused on enhancing the efficiency of solar energy systems through their BatteryBrain technology.',
          'Check out the application on <a className="text-blue-500" href="https://github.com/AleksanderEvensen/StartCode-StashPoppers" target="_blank">the GitHub Repo</a>!'
        ]
      },
      {
        title: 'What did we make?',
        content: [
          'Every BatteryBrain is connected to a local network. This can make it difficult to access the devices remotely. Our team created a robust solution for customers to communicate with their BatteryBrain devices from anywhere in the world, using SSH-tunnels and a centralized Rust server, mapping each request to the correct SSH-tunnel depending on the subdomain used in the request. Essentially, a quickly cobbled together Ngrok.',
          'We also managed to create a sleek webinterface for users to monitor and control their BatteryBrain devices remotely, providing real-time data visualization and control options to optimize energy usage and storage. This webinterface also featured a world map, showing the locations of all connected BatteryBrain devices for easy monitoring, as well as a chat function between customers and Enmo employees.',
        ]
      },
      {
        title: 'The results...',
        content: [
          'After an intense 48 hours of brainstorming, coding, energy-drink consuming, and testing, our team emerged victorious! We were honored to receive the first-place award for our well-rounded feature-packed solution.',
          'This also landed me a Summer Internship at Enmo AS in the summer of 2025, where I was lead-developer for a new domain within the BatteryBrain technology. You can read more about my work at Enmo AS <a className="text-blue-500" href="/articles/enmo-summer-internship-2025">here</a>.',
        ]
      },
      {
        title: 'Technologies used',
        content: [
          'During the hackathon, we utilized a variety of modern technologies to build our solution. Here are some of the key technologies we used:',
          '<span className="font-bold">Frontend</span>          : React / TypeScript / Next.js / tRPC',
          '<span className="font-bold">Backend</span>           : Rust / Actix / SSH / PostgreSQL / RabbitMQ',
          '<span className="font-bold">DevOps / Others</span>   : Docker / GitHub Actions / Railway / Nginx',
        ]
      }
    ]
  } as LinkCardProps,
  {
    image: '/articles/start-code-2025.jpg',
    title: 'Winner of Start Code 2025',
    articleKey: 'start-code-2025',
    altTitle: '48h Hackathon',
    shortDesc: 'Start Code 2025 was a 48-hour hackathon organized by Start NTNU, where teams competed to develop an innovative software solution to a case given by Reitan AS. Our team emerged victorious with our project REMA 1001, which aims to guide customers through the store to find their desired products quickly and efficiently.',
    time: new Date('2025-10-17'),
    lastUpdated: new Date('2025-11-02'),
    chapters: [
      {
        content: [
          'Start Code 2025 was a thrilling 48-hour hackathon organized by Start NTNU, where over 15 teams of students competed to develop innovative software solutions to real-world challenges. This year, the case was provided by Reitan AS, a leading retail company in Norway.',
          'Check out the application on <a className="text-blue-500" href="https://github.com/borgaar/start-code-2025">the GitHub Repo</a>!'
        ],
      },
      {
        title: 'What did we make?',
        content: ['Our team decided to tackle the challenge of improving the in-store shopping experience for customers. We developed REMA 1001, an app that helps customers navigate through the store to find their desired products quickly and efficiently. With an intuitive interface and a comprehensive map navigation system, REMA 1001 aims to enhance customer satisfaction and streamline the shopping process.',]
      },
      {
        title: 'The results...',
        content: [
          'After an intense 48 hours of brainstorming, coding, energydrunk consuming, and testing, our team emerged victorious! We were honored to receive the first-place award for our innovative solution and the potential impact it could have on the retail industry.',
        ]
      }
    ],

  } as LinkCardProps,
  {
    image: '/articles/enmo.png',
    articleKey: 'enmo-summer-internship-2025',
    title: 'Enmo AS Summer Internship 2025',
    altTitle: 'Developer',
    time: [new Date('2025-06-23'), new Date('2025-08-08')],
    shortDesc:
      'During the summer of 2025, I had the opportunity to work as a developer intern at Enmo AS, a startup focused on enhancing the efficiency of solar energy systems through their BatteryBrain technology. During my internship, I was the lead developer for a new domain within the BatteryBrain technology, where I gained valuable experience in Rust, embedded systems, and energy management solutions.',
    chapters: [
      {
        content: [
          'Enmo AS is a startup that provides innovative solutions for improving cooperation between solar panels and batteries using their BatteryBrain technology. During my summer internship in 2025, I had the privilege of working as a developer intern at Enmo AS, where I was the lead developer for a new domain within the BatteryBrain technology.',
        ],
      },
      {
        title: 'My role and contributions',
        content: [
          'During my time at Enmo AS, I was responsible for designing and implementing a key feature that would help stabilize the energy grid by allowing one to give back excess energy from batteries to the grid during peak hours. As this was an already established codebase, I had to quickly familiarize myself with the existing architecture and code conventions used by the Enmo development team.',
          'During my internship, I gained valuable experience in Python programming, energy management solutions, and how the norwegian energy market operates as a whole. I also had the opportunity to work on real-world projects that had a tangible impact on the company\'s products and services.',
          'Towards the end of my internship, I was ahead of schedule, so I took the initiative to create an automatic deployment pipeline using GitHub Actions, which streamlined the deployment process and reduced the time it took to release new features to customers.',
        ],
      },
      {
        title: 'Technologies used',
        content: [
          'During my internship at Enmo AS, I worked with a variety of modern technologies to develop and enhance the BatteryBrain technology. Here are some of the key technologies I used:',
          '<span className="font-bold">Programming Languages</span>   : Python / TypeScript',
          '<span className="font-bold">Frameworks</span>              : React / Next.js',
          '<span className="font-bold">Other</span>                   : Modbus / PostgreSQL / Alembic',
        ],
      }
    ],
    lastUpdated: new Date('2025-11-02'),
  } as LinkCardProps,
].toSorted((a, b) => {
  const aEnd = Array.isArray(a.time) ? a.time[1] ?? new Date() : a.time;
  const bEnd = Array.isArray(b.time) ? b.time[1] ?? new Date() : b.time;
  return bEnd.getTime() - aEnd.getTime();
});

articles.forEach((article) => {
  articleData.set(article.articleKey, article);
});

export { articleData };