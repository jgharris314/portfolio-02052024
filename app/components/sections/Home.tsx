import SectionContainer from "../SectionContainer"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { BsFiletypePdf } from "react-icons/bs"

export default function Home() {
  const labelClasses = "bg-mothGrey-0/15 p-1 md:p-4 text-mothBlack-0 font-black"

  return (
    <SectionContainer
      bgClasses={`h-screen bg-mothBlack-0 pt-12`}
      id="home"
      additionalContentClasses="flex flex-col gap-8 justify-center items-center h-full w-full text-center  leading-[72px]"
    >
      <h1 className={`${labelClasses} text-[72px]  md:text-[96px] `}>
        Jacob Harris
      </h1>
      <h2 className={`${labelClasses} text-[54px] md:text-[80px]`}>
        Full Stack Developer
      </h2>
      <h3 className={`${labelClasses} text-[48px] md:text-[72px]`}>
        Denver, CO
      </h3>
      <div className="flex w-full justify-center items-center gap-8">
        <a href="https://github.com/jgharris314" target="_blank">
          <FaGithub color="#dddae025" size={60} className="hover:fill-white" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/jacob-harris-web-dev/"
          target="_blank"
        >
          <FaLinkedin
            color="#dddae025"
            size={60}
            className="hover:fill-[#0077B5]"
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
            className="hover:fill-mothGreen-0"
          />
          <span className="absolute top-[4.5rem] -left-3 scale-0 rounded bg-mothBlack-0 p-2 text-xs text-white group-hover:scale-100">
            Download My Resume!
          </span>
        </a>
      </div>
    </SectionContainer>
  )
}
