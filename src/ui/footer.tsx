import SocialIcon from "./social_icon";

import { inter, lusitana } from "./fonts";

export default function Footer() {
  return (
    <footer className="bg-[#704492] text-white py-8 flex items-center justify-between px-6">
      <p className={`${inter.className} text-sm font-[500] font`}>
        &copy; {new Date().getFullYear()} 0xCUHKSZ. 2025. All rights reserved.
      </p>

      <p className={`${inter.className} text-sm font-[500] font`}>
        st_blockchain@link.cuhk.edu.cn
      </p>

      <div className="flex items-center justify-between">
        <SocialIcon href="https//twitter.com" logo="X" />
      </div>
    </footer>
  )
}