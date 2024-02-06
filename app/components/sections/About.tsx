import { useEffect, useState, useCallback } from "react"
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import SectionContainer from "../../components/SectionContainer"

const aboutMeItems = [
  "a creator",
  "a musician",
  "a student",
  "passionate",
  "driven",
  "a motivator",
  "empathetic",
  "dedicated",
]

export default function AboutSection() {
  const [currentItem, setCurrentItem] = useState(0)
  const shuffle = useCallback(() => {
    setCurrentItem((prev) => (prev === aboutMeItems.length - 1 ? 0 : prev + 1))
  }, [])

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000)
    return () => clearInterval(intervalID)
  }, [shuffle])

  const iconSize = "w-[40px] h-[40px] md:w-[80px] md:h-[80px]"

  return (
    <SectionContainer
      bgClasses="h-screen bg-gradient-to-b from-mothGreen-0/50 from-0% to-mothBlack-0 to-80% relative"
      additionalContentClasses="flex flex-col items-center justify-center w-full h-full"
      id="about"
    >
      <div className="text-[22px] md:text-[36px] mb-4 text-mothGrey-0 font-semibold">
        I have been described as:
      </div>
      <div className="text-[36px] md:text-[72px] text-mothGrey-0 label-classes w-[280px] md:w-[700px] text-center uppercase">
        {aboutMeItems[currentItem]}
      </div>
      <div className="absolute bottom-0 left-0 grid grid-cols-2 md:flex gap-4 items-center justify-center justify-items-center w-full h-40 pb-4">
        <FaReact className={`${iconSize}`} fill="cyan" />
        <div className="flex bg-white rounded md:mr-3">
          <SiTypescript fill="#007acc" className={`${iconSize}`} />
        </div>
        <FaNodeJs className={`${iconSize}`} fill="#3c873a" />
        <FaHtml5 fill="red" className={`${iconSize}`} />
        <div className="col-span-2 items-center">
          <FaCss3Alt fill="blue" className={`${iconSize}`} />
        </div>
      </div>
    </SectionContainer>
  )
}