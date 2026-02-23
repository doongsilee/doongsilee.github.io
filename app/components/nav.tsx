import Link from "next/link";
import { Dohyun } from "app/ui/fonts";

const navItems = {
  "/": {
    name: "Home",
  },
  "/about": {
    name: "About",
  },
  // "/blog": {
  //   name: "Blog",
  // },
  "/portfolio": {
    name: "Portfolio",
  },
  // "/resume": {
  //   name: "Resume",
  // },
};
const navIcons = {
  github: {
    name: "GitHub",
    url: "github.com/doongsilee",
    iconUrl:
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
  },
  linkedin: {
    name: "LinkedIn",
    url: "www.linkedin.com/in/hyunwoo-lee-366261ba/",
    iconUrl: "https://cdn-icons-png.flaticon.com/256/3536/3536569.png",
  },
  twitter: {
    name: "Twitter",
    url: "x.com/RyanLee79385082",
    iconUrl:
      "https://cdn.cms-twdigitalassets.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.2560.png",
  },
};

export function Navbar() {
  return (
    <aside className="bg-transparent px-2 tracking-tight">
      <div className="lg:top-20 lg:sticky flex flex-row justify-between items-baseline">
        <div>
          <a
            href="/"
            className={`${Dohyun.className} font-bold text-2xl md:text-4xl tracking-tight`}
          >
            둥실
          </a>
        </div>
        <nav
          className="relative flex flex-row flex-1 items-center px-0 pb-0 md:overflow-auto scroll-pr-6 fade"
          id="nav"
        >
          <div className="flex flex-row flex-1 justify-end md:justify-center items-center">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="relative flex m-1 px-2 py-1 hover:text-neutral-800 dark:hover:text-neutral-200 text-sm md:text-lg align-middle transition-all"
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <div className="hidden md:flex flex-row items-center">
            <a
              key={"github"}
              href={`https://${navIcons.github.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex m-1 py-1 hover:text-neutral-800 dark:hover:text-neutral-200 align-middle transition-all"
            >
              <img
                src={navIcons.github.iconUrl}
                alt={navIcons.github.name}
                className="w-6 h-6 icon"
              />
            </a>
            <a
              key={"linkedin"}
              href={`https://${navIcons.linkedin.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex m-1 py-1 hover:text-neutral-800 dark:hover:text-neutral-200 align-middle transition-all"
            >
              <img
                src={navIcons.linkedin.iconUrl}
                alt={navIcons.linkedin.name}
                className="w-5 h-5 icon"
              />
            </a>
            <a
              key={"twitter"}
              href={`https://${navIcons.twitter.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex m-1 px-1 pl-1 hover:text-neutral-800 dark:hover:text-neutral-200 align-middle transition-all"
            >
              <img
                src={navIcons.twitter.iconUrl}
                alt={navIcons.twitter.name}
                className="w-4 h-4 icon"
              />
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
