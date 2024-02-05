"use client"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { RxHamburgerMenu } from "react-icons/rx"
import { MdClose } from "react-icons/md"
import SectionContainer from "../SectionContainer"
import Image from "next/image"
import { useRouter } from "next/navigation"
import logo from "../../assets/logo.png"
import { navOptions } from "./constants"

export default function MobileNav() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  function onClickHandler(option: string) {
    const hash = `#${option}`
    router.push(hash)
    setIsOpen(false)
  }

  const purpleHex = "#7338ab"
  const greenHex = "#2cfc04"

  return (
    <>
      <SectionContainer
        bgClasses="lg:hidden bg-mothPurple-0  bg-gradient-to-b from-black/90 to-black/70 fixed h-16 w-screen left-0 top-0"
        additionalContentClasses="flex w-full h-16 items-center"
      >
        <div className="w-1/3">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="h-12 flex items-center"
          >
            {isOpen ? (
              <MdClose size={35} color={greenHex} />
            ) : (
              <RxHamburgerMenu size={35} color={greenHex} />
            )}
          </button>
        </div>
        <div className="relative flex w-1/3 justify-center bg-contain">
          <Image
            alt="jgharris314 logo"
            className=" bg-mothPurple-0  bg-gradient-to-b from-black/90 to-black/70 h-16 w-40"
            src={logo}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="w-1/3" />
      </SectionContainer>

      {isOpen && (
        <div className="h-screen fixed top-16 left-0 w-screen bg-mothBlack-0 lg:hidden transition-transform">
          {
            <ul className="flex flex-col w-full items-start justify-start gap-4 text-mothGrey-0 p-6 md:px-12">
              {navOptions.map((option) => {
                return (
                  <button
                    key={uuidv4()}
                    type="button"
                    onClick={() => onClickHandler(option)}
                    className={
                      "capitalize w-full h-20 text-[20px] font-semibold border-mothGrey-0 border-b-2"
                    }
                  >
                    {option}
                  </button>
                )
              })}
            </ul>
          }
        </div>
      )}
    </>
  )
}
