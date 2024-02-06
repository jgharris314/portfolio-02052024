import SectionContainer from "../SectionContainer"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { BsFiletypePdf } from "react-icons/bs"

export default function Home() {
  return (
    <SectionContainer
      bgClasses={`h-screen bg-mothBlack-0 bg-gradient-to-b from-mothBlack-0 via-mothBlack-0 to-mothGreen-0/50 via-80% pt-12`}
      id="home"
      additionalContentClasses="flex flex-col gap-8 justify-center items-center h-full w-full text-center  leading-[54px] md:leading-[72px]"
    >
      <h1 className={`label-classes text-[54px] md:text-[72px] lg:text-[96px]`}>
        Jacob Harris
      </h1>
      <h2 className={`label-classes text-[40px] md:text-[54px] lg:text-[72px]`}>
        Full Stack Developer
      </h2>
      <h3 className={`label-classes text-[36px] md:text-[40px] lg:text-[54px]`}>
        Denver, CO
      </h3>
      <div className="flex w-full justify-center items-center gap-8">
        <a href="https://github.com/jgharris314" target="_blank">
          <FaGithub
            color="#dddae025"
            size={60}
            className="hover:fill-white drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]"
          />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/jacob-harris-web-dev/"
          target="_blank"
        >
          <FaLinkedin
            color="#dddae025"
            size={60}
            className="hover:fill-[#0077B5] drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]"
          />
        </a>
        <a
          href={"/docs/resume.pdf"}
          download="resume.pdf"
          className="group relative"
        >
          <BsFiletypePdf
            color="#dddae025"
            size={60}
            className="hover:fill-mothGreen-0 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]"
          />
          <span className="absolute top-[4.5rem] -left-3 scale-0 rounded bg-mothBlack-0 p-2 text-xs text-white group-hover:scale-100">
            Download My Resume!
          </span>
        </a>
      </div>
    </SectionContainer>
  )
}
