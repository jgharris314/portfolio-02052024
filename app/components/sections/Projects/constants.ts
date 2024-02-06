export const carouselResponsiveness = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export const innerCarouselResponsiveness = {
  superLargeDesktop: {
    breakpoint: { max: 3800, min: 2800 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 2800, min: 824 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 824, min: 264 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 264, min: 0 },
    items: 1,
  },
}

export const carouselItems = [
  {
    imgSrcs: [
      "/projectImages/moth0.png",
      "/projectImages/moth1.png",
      "/projectImages/moth2.png",
    ],
    imgAlt: "screenshot of mothDama",
    title: "Project: mothDama",
    description:
      "A simple app made for the kendama community. Made with the PERN stack",
    demoLink: "https://mothdama.vercel.app/games",
    githubLink: "https://github.com/jgharris314/mothDama",
  },
  {
    imgSrcs: ["/projectImages/craps0.png", "/projectImages/craps1.png"],
    imgAlt: "screenshot of a craps simulator",
    title: "Project: Craps Simulator",
    description: "a simple craps simulator made with React",
    demoLink: "https://craps2021.vercel.app",
    githubLink: "https://github.com/jgharris314/craps2021",
  },
]
