function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
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
      url: "twitter.com/doongsilee",
      iconUrl:
        "https://cdn.cms-twdigitalassets.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.2560.png",
    },
  };
  return (
    <footer className="pt-2">
      <div className="flex flex-row justify-between items-center">
        {/* <ul className="flex md:flex-row flex-col space-x-0 md:space-x-4 space-y-2 md:space-y-0 mt-8 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/vercel/next.js"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://vercel.com/templates/next.js/portfolio-starter-kit"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">view source</p>
          </a>
        </li>
      </ul> */}
        <p className="text-neutral-900 text-xs md:text-sm">
          © {new Date().getFullYear()} Doongsil Universe. All rights reserved.
        </p>

        <div className="flex flex-row items-center md:invisible">
          <a
            key={"github"}
            href={`https://${navIcons.github.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex m-1 py-1 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all align-middle"
          >
            <img
              src={navIcons.github.iconUrl}
              alt={navIcons.github.name}
              className="w-4 h-4 icon"
            />
          </a>
          <a
            key={"linkedin"}
            href={`https://${navIcons.linkedin.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex m-1 py-1 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all align-middle"
          >
            <img
              src={navIcons.linkedin.iconUrl}
              alt={navIcons.linkedin.name}
              className="w-3 h-3 icon"
            />
          </a>
          <a
            key={"twitter"}
            href={`https://${navIcons.twitter.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex m-1 px-1 pl-1 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all align-middle"
          >
            <img
              src={navIcons.twitter.iconUrl}
              alt={navIcons.twitter.name}
              className="w-3 h-3 icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
