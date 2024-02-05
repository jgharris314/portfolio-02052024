"use client"
import SectionContainer from "./components/SectionContainer"
import Nav from "./components/Nav"
import Home from "./components/sections/Home"

export default function HomePage() {
  return (
    <div className="bg-mothBlack-0 min-h-screen w-full">
      <Nav />
      <Home />
      <SectionContainer
        bgClasses="h-screen bg-red-500 pt-12"
        additionalContentClasses="w-full text-center text-[72px]"
        id="about"
      >
        About
      </SectionContainer>
      <SectionContainer
        bgClasses="h-screen bg-blue-500 pt-12"
        additionalContentClasses="w-full text-center text-[72px]"
        id="projects"
      >
        Projects
      </SectionContainer>
      <SectionContainer
        bgClasses="h-screen bg-yellow-500 pt-12"
        additionalContentClasses="w-full text-center text-[72px]"
        id="contact"
      >
        Contact
        <div className="text-[16px] w-full text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor
          tempor velit, eget dapibus nulla porttitor sed. Donec fringilla risus
          at luctus tristique. Curabitur tincidunt, dolor nec mattis fermentum,
          purus ex bibendum orci, vel consectetur urna nulla eget diam. Aenean
          fermentum orci eu neque pulvinar, id fermentum eros imperdiet.
          Phasellus vel augue vehicula, dictum dui quis, aliquam nibh.
          Vestibulum tincidunt a metus id tincidunt. Vestibulum convallis enim
          at leo ultricies, in lobortis odio lacinia. Phasellus facilisis purus
          ut bibendum semper. Ut est leo, aliquam at bibendum id, consectetur
          quis arcu. Vestibulum faucibus, lacus condimentum pellentesque
          imperdiet, odio ante aliquam turpis, a accumsan arcu justo et leo.
          Proin sagittis neque quis pellentesque viverra. Sed fermentum, purus
          vitae sodales feugiat, libero nibh congue lacus, in lacinia dolor
          justo sit amet nunc. Aenean interdum eu ante id egestas. Aliquam ut
          nisi nibh. Integer sit amet congue quam. Nullam molestie condimentum
          nisl, maximus hendrerit turpis cursus nec. Duis sit amet convallis ex.
          In elementum justo id urna faucibus rutrum eget nec turpis. Ut ut
          finibus justo.
        </div>
      </SectionContainer>
    </div>
  )
}
