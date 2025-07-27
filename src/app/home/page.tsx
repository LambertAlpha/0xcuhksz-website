'use client'

import TopNavButton from "@/ui/topnavbutton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col scroll-smooth">
      {/* Navbar, MIGRATE TO A SEPARATE layout.tsx FILE IF NEEDED LATER FOR OTHER PAGES!!!*/}
      <nav className="bg-gray-700 text-white py-3 px-4 shadow-xl sticky top-0 z-50">
        <ul className="flex space-x-10 font-semibold items-center">
          <li>
            <Image src="/logo-temp.jpg" alt="Logo" width={50} height={50} />
          </li>
          <li>{<TopNavButton text="Welcome" href="#welcome" />}</li>
          <li>{<TopNavButton text="About" href="#about" />}</li>
          <li>{<TopNavButton text="Join" href="#join" />}</li>
          <li>{<TopNavButton text="Our Team" href="#team" />}</li>
        </ul>
      </nav>

      {/* Sections */}
      <main className="flex-1">
        <section id="welcome" className="min-h-screen flex items-center justify-center bg-white">
          <h1 className="text-4xl text-black font-bold">WELCOME PAGE</h1>
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center bg-white">
          <h1 className="text-4xl text-black font-bold">ABOUT US PAGE</h1>
        </section>
        <section id="join" className="min-h-screen flex items-center justify-center bg-white">
          <h1 className="text-4xl text-black font-bold">JOIN PAGE</h1>
        </section>
        <section id="team" className="min-h-screen flex items-center justify-center bg-white">
          <h1 className="text-4xl text-black font-bold">TEAM SECTION PAGE</h1>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-600 text-white text-center py-8">
        &copy; {new Date().getFullYear()} Copyright stuff, WeChat here, socials, etc.
      </footer>
    </div>
  );
}
