import PortfolioCard from "../components/portfolioCard";
import TechStackVisualizer from "../components/portfolio/tech-stack-visualizer";
import { MontserratFont } from "app/ui/fonts";

export default function Page() {
  const portfolio = [

    {
      id: "macdal",
      title: "Macdal",
      subtitle: "AI Powered Software Product Manager",
      badges: ["AI", "Product Management", "LLM", "SaaS", "Web"],
      description:
        "MACDAL is a project aimed at developing a virtual software project manager by collecting and processing data from tools commonly used by software development teams, such as Slack, GitHub, and Figma, and integrating LLM and RAG systems. We led the design and development process, including multimodal and RAG research, through a collaborative study with MILA, a research institute in Quebec, Canada",
      type: "Founder Project",
      period: "24.06 - 24.08",
      organization: "Tryfifty",
      role: "Lead Developer (RAG Research & Full-stack Service Development)",
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
        "The Annotation System is a Figma plugin designed to assist UI/UX designers in creating and managing annotations effortlessly. In this project, we experimented with LLM-based automated annotation generation to streamline the design handoff process.",
      type: "Founder Project",
      period: "24.05 - 24.06",
      organization: "Tryfifty",
      role: "Product Lead & Development",
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
      organization: "Tryfifty",
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
      id: "streetballer",
      title: "StreetBaller",
      subtitle: "The O2O Platform for Amateur Basketball Clubs",
      badges: ["Mobile App", "O2O", "Basketball", "Community"],
      description:
        "StreetBaller is an O2O platform developed simultaneously for Web and Mobile using Expo. It offers comprehensive features for amateur basketball enthusiasts, including match matching, team recruitment, and court discovery, building a vibrant local basketball community.",
      type: "Founder Project",
      period: "22.08 - 23.05",
      organization: "NOLAB",
      role: "Planning, Development (Web, iOS, Android)",
      contribution: "100%",
      links: [],
      stacks: [
        {
          id: "t01",
          category: "Cross-platform (Mobile & Web)",
          stack: ["React Native", "Expo", "TypeScript"],
        },
        {
          id: "t02",
          category: "Backend",
          stack: ["Node.js", "Express.js", "Postgres", "WebSocket", "AWS"],
        },
      ],
      medias: [
        {
          type: "video",
          url: "https://doongsilee-portfolio.s3.ap-northeast-2.amazonaws.com/streetballer_intro.mov",
          thumbnail: "/portfolio/streetballer_1.png",
        },
        {
          type: "image",
          url: "/portfolio/streetballer_2.png"
        }
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
      id: "spoeum",
      title: "Spoeum",
      subtitle: "Matching Platform for Professional Golfers and Caddies",
      badges: ["Mobile", "Golf", "Matching", "Payment System"],
      description:
        "Spoeum is a specialized matching platform connecting professional golfers with professional caddies. It manages the entire engagement lifecycle, including sending/receiving proposals, contract execution, secure payments, and settlement systems.",
      type: "Freelancing",
      period: "25.06 - 25.11",
      role: "PM & Lead Development (Mobile & Backend)",
      contribution: "90%",
      links: [
        {
          title: "Web",
          link: "https://spoeum.com",
        },
      ],
      stacks: [
        {
          id: "t01",
          category: "Mobile",
          stack: ["React Native", "TypeScript", "Redux"],
        },
        {
          id: "t02",
          category: "Backend",
          stack: ["Node.js", "Express.js", "MySQL", "AWS", "Firebase"],
        },
      ],
      medias: [
        {
          type: "image",
          url: "/portfolio/spoeum_1.png",
        },
        {
          type: "image",
          url: "/portfolio/spoeum_2.png",
        },
        {
          type: "image",
          url: "/portfolio/spoeum_3.png",
        },
      ],
    },
    {
      id: "josangnim",
      title: "Ancestor’s Barbershop",
      subtitle: "Grave Care Service Platform",
      badges: ["Mobile", "Web", "O2O", "Matching"],
      description:
        "Ancestor’s Barbershop is a platform that connects customers with partners for grave maintenance services in South Korea. In this project, we were involved not only in end-to-end development—from the initial business concept to the creation of a customer-facing web client, backend system, mobile application for partners, and admin website—but also in the actual operation of the business.",
      type: "Founder Project",
      period: "20.06 - 22.08",
      organization: "josangnim",
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
        "ZZIKZA is a mobile application service designed for sports players, integrating with self-tracking gear.\n In the MVP project, we developed the mobile application, including AI tracking algorithms and hardware integration",
      type: "Founder Project",
      period: "22.06 - 22.09",
      organization: "ZZIKZA",
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

  const founderProjects = portfolio.filter(p => p.type === "Founder Project");
  const clientProjects = portfolio.filter(p => p.type === "Freelancing");

  return (
    <div className="flex flex-col gap-24 my-12">
      <TechStackVisualizer />

      {/* Founder Projects Section */}
      <div className="flex flex-col gap-12">
        <div className="text-center md:text-left">
          <h2 className={`text-3xl font-bold text-neutral-900 mb-2 ${MontserratFont.className}`}>Founder Ventures</h2>
          <p className="text-neutral-500 max-w-2xl">Products we&apos;ve conceptualized, designed, and built from the ground up as a founder.</p>
        </div>

        <section className="bg-neutral-50/50 border border-neutral-100 rounded-[3rem] p-8 md:p-16 shadow-sm">
          <div className="flex flex-col gap-20">
            {founderProjects.map((item, index) => (
              <div key={item.id} className="relative">
                <PortfolioCard portfolio={item} />
                {index !== founderProjects.length - 1 && (
                  <div className="absolute -bottom-10 left-0 right-0 border-b border-neutral-100/50" />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Client Projects Section */}
      <div className="flex flex-col gap-12">
        <div className="text-center md:text-left">
          <h2 className={`text-3xl font-bold text-neutral-900 mb-2 ${MontserratFont.className}`}>Client Collaborations</h2>
          <p className="text-neutral-500 max-w-2xl">Freelance and contract projects where we provided technical leadership and implementation for diverse clients.</p>
        </div>

        <section className="bg-white border border-neutral-100 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-neutral-100">
          <div className="flex flex-col gap-20">
            {clientProjects.map((item, index) => (
              <div key={item.id} className="relative">
                <PortfolioCard portfolio={item} />
                {index !== clientProjects.length - 1 && (
                  <div className="absolute -bottom-10 left-0 right-0 border-b border-neutral-100/50" />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
