import Image from "next/image"
import TopNavButton from "./topnavbutton"

export default function TopNav() {
  return (
    <nav className="bg-[#704492] text-white py-3 px-4 shadow-xl sticky top-0 z-50">
      <ul className="flex space-x-12 font-semibold items-center">
        <li>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Image src="/logo-0xcuhksz.png" alt="Logo" width={512} height={512} className="scale-140 -translate-y-1.5"/>
          </div>
        </li>
        <li>{<TopNavButton text="Welcome" href="#welcome" />}</li>
        <li>{<TopNavButton text="About" href="#about" />}</li>
        <li>{<TopNavButton text="Join" href="#join" />}</li>
        <li>{<TopNavButton text="Our Team" href="#team" />}</li>
      </ul>
    </nav>
  )
}