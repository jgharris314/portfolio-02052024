import Image from "next/image"
import { v4 as uuidv4 } from "uuid"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { CgPlayButtonO } from "react-icons/cg"
import { FaGithub } from "react-icons/fa"
import SectionContainer from "../../SectionContainer"
import {
  carouselResponsiveness,
  innerCarouselResponsiveness,
  carouselItems,
} from "./constants"

import ButtonGroup from "./ButtonGroup"

export default function ProjectsSection() {
  return (
    <SectionContainer
      bgClasses="h-screen bg-[linear-gradient(to_bottom,#13051f,#2cfc0430_60%,#13051f30_75%,#13051f_95%),url('/bgImages/lines.jpeg')] bg-cover pt-20"
      additionalContentClasses="w-full text-center"
      id="projects"
    >
      <Carousel
        responsive={carouselResponsiveness}
        infinite
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        renderButtonGroupOutside={true}
        draggable={false}
        swipeable={false}
      >
        {carouselItems.map((item) => {
          return (
            <div
              key={uuidv4()}
              className="relative flex flex-col w-full gap-2 text-mothGrey-0"
            >
              <span className="text-[36px] md:text-[48px] leading-[36px] md:leading-[48px] font-bold p-2 !bg-mothBlack-0 !text-mothGrey-0 whitespace-nowrap max-w-min mx-auto">
                {item.title}
              </span>
              <Carousel responsive={innerCarouselResponsiveness} infinite>
                {item.imgSrcs.map((img) => {
                  return (
                    <Image
                      key={uuidv4()}
                      src={img}
                      alt={item.imgAlt}
                      width={900}
                      height={900}
                      className="w-3/5 md:w-1/3 lg:w-1/5 h-auto mx-auto"
                    />
                  )
                })}
              </Carousel>
              <span className="text-[18px] bg-mothBlack-0 mx-auto md:max-w-[600px] p-2">
                {item.description}
              </span>
              <div className="flex max-w-min mx-auto justify-center gap-4 mb-4 bg-mothBlack-0 p-2">
                <a href={item.demoLink} target="_blank">
                  {<CgPlayButtonO size={60} color={"#2cfc04"} />}
                </a>
                {
                  <a href={item.githubLink} target="_blank">
                    <FaGithub color="#white" size={60} />{" "}
                  </a>
                }
              </div>
            </div>
          )
        })}
      </Carousel>
    </SectionContainer>
  )
}
