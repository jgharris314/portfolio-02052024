"use client"
import Nav from "./components/Nav"
import HomeSection from "./components/sections/Home"
import AboutSection from "./components/sections/About"
import ProjectsSection from "./components/sections/Projects"
import ContactSection from "./components/sections/Contact"

export default function HomePage() {
  return (
    <div className="bg-mothBlack-0 min-h-screen w-full">
      <Nav />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
