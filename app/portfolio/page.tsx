import PortfolioCard from "../components/portfolioCard";

export default function Page() {
  const portfolio = [
    {
      id: "macdal",
      title: "Macdal",
      subtitle: "AI Powered Software Product Manager",
      badges: ["AI", "Product Management", "LLM", "SaaS", "Web"],
      description:
        "MACDAL is a project aimed at developing a virtual software project manager by collecting and processing data from tools commonly used by software development teams, such as Slack, GitHub, and Figma, and integrating LLM and RAG systems. I led the design and development process, including multimodal and RAG research, through a collaborative study with MILA, a research institute in Quebec, Canada",
      type: "Founder Project",
      period: "24.06 - 24.08",
      role: "End to End Development",
      contribution: "70%",
      links: [
        {
          title: "Github",
          link: "https://github.com/tryfifty/slack-apps-test",
        },
      ],
      stacks: [
        {
          id: "t01",
          category: "Client(Slack plugin)",
          stack: ["bolt.js", "TypeScript"],
        },
        {
          id: "t02",
          category: "Client(Web)",
          stack: ["Next.js", "TypeScript"],
        },
        {
          id: "t04",
          category: "LLM & RAG",
          stack: [
            "OpenAI API",
            "Ollma",
            "langchain",
            "Neo4j",
            "Qdrant",
            "langsmith",
            "huggingface",
            "SBERT(SentenceTransformer)",
          ],
        },
        {
          id: "t03",
          category: "Backend",
          stack: ["Flask", "Supabase", "AWS", "Docker"],
        },
      ],
      medias: [
        {
          type: "video",
          url: "https://doongsilee-portfolio.s3.ap-northeast-2.amazonaws.com/macdal_1.mp4",
          thumbnail: "/portfolio/macdal_1.png",
        },
        {
          type: "video",
          url: "https://doongsilee-portfolio.s3.ap-northeast-2.amazonaws.com/Macdal-demo.mp4",
          thumbnail: "/portfolio/macdal_2.png",
        },
      ],
    },
    {
      id: "annote",
      title: "Annotation System",
      subtitle: "Figma Annotation Helper Plugin",
      badges: ["Figma Plugin", "Productivity", "Handoff"],
      description:
        "The Annotation System is a Figma plugin designed to assist UI/UX designers in creating and managing annotations effortlessly, streamlining the design handoff process.",
      type: "Founder Project",
      period: "24.05 - 24.06",
      role: "End to End Development",
      contribution: "100%",
      links: [
        {
          title: "Plugin Store",
          link: "https://www.figma.com/community/plugin/1388649597126355247/annotation-system",
        },
      ],
      stacks: [
        {
          id: "t01",
          category: "Client(Figma plugin)",
          stack: ["Figma Plugin API", "TypeScript"],
        },
      ],
      medias: [
        {
          type: "video",
          url: "https://doongsilee-portfolio.s3.ap-northeast-2.amazonaws.com/annota_1.mp4",
          thumbnail: "/portfolio/annota_1.png",
        },
      ],
    },
    {
      id: "lala",
      title: "LaunchBound",
      subtitle: "AI Powered Software Requirements Generation Helper",
      badges: ["AI", "Software Product Requirements", "LLM", "SaaS", "Web"],
      description:
        "LaunchBound is an AI chatbot service designed to help users unfamiliar with software development clearly outline their software requirements, making it easier to collaborate effectively with developers.",
      type: "Founder Project",
      period: "23.11 - 24.05",
      role: "End to End Development",
      contribution: "60%",
      links: [
        {
          title: "GitHub",
          link: "https://github.com/tryfifty/launch-bound-web",
        },
      ],
      stacks: [
        {
          id: "t01",
          category: "Client(Web)",
          stack: ["React", "Next.js", "TypeScript"],
        },
        {
          id: "t02",
          category: "LLM",
          stack: ["Vercel AI SDK", "OpenAI API", "langchain", "langsmith"],
        },
        {
          id: "t03",
          category: "Backend",
          stack: ["Node.js", "Express.js", "Supabase", "AWS"],
        },
      ],
      medias: [
        {
          type: "video",
          url: "https://doongsilee-portfolio.s3.ap-northeast-2.amazonaws.com/launchbound_1.mp4",
          thumbnail: "/portfolio/launchbound_1.png",
        },
      ],
    },
    {
      id: "kowork",
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
      medias: [
        {
          type: "image",
          url: "/portfolio/kowork_1.png",
        },
        {
          type: "image",
          url: "/portfolio/kowork_2.png",
        },
        {
          type: "image",
          url: "/portfolio/kowork_3.png",
        },
      ],
    },
    {
      id: "josangnim",
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
      medias: [
        {
          type: "image",
          url: "/portfolio/josangnim_1.png",
        },
        {
          type: "image",
          url: "/portfolio/josangnim_2.png",
        },
        {
          type: "image",
          url: "/portfolio/josangnim_3.png",
        },
      ],
    },
    {
      id: "zzikza",
      title: "ZZIKZA",
      subtitle: "AI Automated Sports Shooting Serivce",
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
      medias: [
        {
          type: "video",
          url: "https://doongsilee-portfolio.s3.ap-northeast-2.amazonaws.com/zzikza_1.mp4",
          thumbnail: "/portfolio/zzikza_1.png",
        },
        {
          type: "video",
          url: "https://doongsilee-portfolio.s3.ap-northeast-2.amazonaws.com/zzikza_2.mp4",
          thumbnail: "/portfolio/zzikza_2.png",
        },
        {
          type: "image",
          url: "/portfolio/zzikza_3.png",
        },
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
