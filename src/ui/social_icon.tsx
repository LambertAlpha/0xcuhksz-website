import Link from "next/link"

export default function SocialIcon({logo, href}: {logo: string, href: string}) {
  return (
    <Link key={logo} href={href} className="text-2xl">
      <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center">
        {logo}
      </div>
    </Link>
  )
}