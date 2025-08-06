import Image from "next/image"

export default function TeamIcon({ imagePath }: { imagePath: string }) {
  return (
    <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
      <Image src="/logo-0xcuhksz.png" alt="Logo" width={512} height={512} className="scale-140 -translate-y-1.5" />
    </div>
  )
}