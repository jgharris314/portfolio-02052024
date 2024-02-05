import Image from "next/image"
import { v4 as uuidv4 } from "uuid"
import logo from "../../assets/logo.png"
import SectionContainer from "../SectionContainer"

import { navOptions } from "./constants"

export default function DesktopNav() {
  return (
    <SectionContainer bgClasses="hidden lg:block bg-black fixed h-16 w-screen left-0 top-0">
      <div className="relative flex w-full justify-between h-16 items-center">
        <div className="w-full">
          {" "}
          <Image
            alt="jgharris314 logo"
            className="bg-black h-16 w-40"
            src={logo}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <ul className="flex w-full justify-end gap-8">
          {navOptions.map((option) => {
            return (
              <li key={uuidv4()}>
                <a
                  className="capitalize text-[20px] font-semibold"
                  href={`#${option}`}
                >
                  {option}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </SectionContainer>
  )
}
