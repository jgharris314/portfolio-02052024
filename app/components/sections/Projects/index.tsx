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
//Testing

export default function ProjectsSection() {
  return (
    <SectionContainer
      bgClasses="h-screen bg-mothBlack-0 bg-gradient-to-b from-mothBlack-0 via-mothBlack-0 to-mothGreen-0/20 via-80% pt-20"
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
              className="relative flex flex-col w-full gap-8 xl:gap-4 text-mothGrey-0"
            >
              <span className="text-[36px] md:text-[54px] leading-[36px] md:leading-[54px]">
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
              <span className="text-[18px] xl:mb-4">{item.description}</span>
              <div className="flex w-full justify-center gap-4 mb-4">
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
