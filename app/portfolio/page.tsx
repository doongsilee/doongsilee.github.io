import PortfolioCard from "../components/portfolioCard";

export default function Page() {
  const portfolio = [
    // {
    //   id: 1,
    //   title: "Macdal",
    //   subtitle: "AI Software Product Manager",
    //   badges: ["AI", "Product Management", "LLM", "SaaS", "Web"],
    //   description:
    //     "Macdal is a platform that helps people to find their favorite music.",
    //   type: "Founder Project",
    //   period: "24.06 - 24.08",
    //   role: "Dev, Planning",
    //   contribution: "60%",
    //   links: [
    //     {
    //       title: "iOS",
    //       link: "https://apps.apple.com/us/app/kowork-korean-job-visa/id6445883049",
    //     },
    //   ],
    //   stacks: [],
    //   images: [
    //     "/images/portfolio/macdal.png",
    //     "/images/portfolio/macdal2.png",
    //     "/images/portfolio/macdal3.png",
    //   ],
    // },
    {
      id: 2,
      title: "Kowork",
      subtitle: "Jobs for Foreigners in korea",
      badges: ["Mobile", "B2B", "B2C"],
      description:
        "Design and development project for the official launch version of the Kowork service, a job platform for foreign in korea",
      type: "Freelancing",
      period: "23.06 - 23.08",
      role: "Planning, Development(iOS, Android, Backend)",
      contribution: "80%",
      links: [
        {
          title: "iOS",
          link: "https://apps.apple.com/us/app/kowork-korean-job-visa/id6445883049",
        },
        {
          title: "Android",
          link: "https://play.google.com/store/apps/details?id=kr.kowork&hl=en",
        },
      ],
      stacks: [
        {
          id: "t01",
          category: "Cross Platform Mobile",
          stack: ["React Native", "TypeScript", "Styled-Components"],
        },
        {
          id: "t02",
          category: "Backend",
          stack: [
            "Node.js",
            "Nest.js",
            "GraphQL",
            "MySQL",
            "AWS",
            "Firebase",
            "Docker",
          ],
        },
      ],
      images: [
        "/images/portfolio/kowork_1.png",
        "/images/portfolio/kowork_2.png",
        "/images/portfolio/kowork_3.png",
      ],
    },
    {
      id: 3,
      title: "Ancestor’s Barbershop",
      subtitle: "Grave Care Service Platform",
      badges: ["Mobile", "Web", "O2O", "Matching"],
      description:
        "Ancestor’s Barbershop is a platform that connects customers with partners for grave maintenance services in South Korea. In this project, I was involved not only in end-to-end development—from the initial business concept to the creation of a customer-facing web client, backend system, mobile application for partners, and admin website—but also in the actual operation of the business.",
      type: "Founder Project",
      period: "20.06 - 22.08",
      role: "Planning, Development(Frontend, Backend)",
      contribution: "90%",
      links: [
        {
          title: "Web",
          link: "https://josangnim.com/",
        },
        {
          title: "Android",
          link: "https://play.google.com/store/apps/details?id=com.cnjmonster.josangnim",
        },
      ],
      stacks: [
        {
          id: "t01",
          category: "Web Frontend & Admin",
          stack: ["React", "TypeScript", "Redux"],
        },
        {
          id: "t03",
          category: "Android",
          stack: ["Java", "Native"],
        },
        {
          id: "t02",
          category: "Backend",
          stack: ["Node.js", "Express.js", "AWS", "Firebase", "Docker"],
        },
      ],
      images: [
        "/images/portfolio/josangnim_1.png",
        "/images/portfolio/josangnim_2.png",
        "/images/portfolio/josangnim_3.png",
      ],
    },
    {
      id: 4,
      title: "ZZIKZA",
      subtitle: "AI based Smart tracking Gear & Application for Sport players",
      badges: ["Mobile", "Hardware", "Sensor", "AI", "Vision"],
      description:
        "ZZIKZA is a mobile application service designed for sports players, integrating with self-tracking gear.\n In the MVP project, I developed the mobile application, including AI tracking algorithms and hardware integration",
      type: "Founder Project",
      period: "22.06 - 22.09",
      role: "Planning, Development(Mobile App, Backend)",
      contribution: "100%",
      links: [],
      stacks: [
        {
          id: "t01",
          category: "Mobile App",
          stack: ["Android Native", "Java"],
        },
        {
          id: "t03",
          category: "Vision AI",
          stack: [
            "Tensorflow lite",
            "mediapipe",
            "Pytorch",
            "OpenCV",
            "YOLO",
            "Re3",
          ],
        },
        {
          id: "t02",
          category: "Backend",
          stack: ["Node.js", "AWS", "Firebase", "Docker"],
        },
      ],
      images: [
        "/images/portfolio/ZZIKZA_1.png",
        "/images/portfolio/ZZIKZA_2.png",
        "/images/portfolio/ZZIKZA_3.png",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-12 my-12">
      {portfolio.map((item, index) => (
        <>
          <PortfolioCard key={item.id} portfolio={item} />
          <hr className="border-gray-600" />
        </>
      ))}
    </div>
  );
}
