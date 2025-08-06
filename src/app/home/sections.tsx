'use client'

import Image from "next/image"
import TeamIcon from "@/ui/team_icon"
import { inter } from "@/ui/fonts"

export function WelcomeSection() {
  return (
    <section id="welcome" className={`${inter.className} w-full h-[1000px] relative scroll-mt-22`}>
      <div className="w-full h-[550px] relative">
        <Image
          src="/landscape-image.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        HELLO!!
      </div>

      <div className="w-full h-[450px] bg-[#9C7FB6] px-16 py-9 relative">
        <h1 className={`text-4xl font-semibold`}>Welcome to 0xCUHKSZ</h1>

        <div className="flex justify-center">
          <Image src="/logo-0xcuhksz.png" alt="Logo" width={144} height={144} className="flex justify-center items-center" />
        </div>

        <p className={`max-w-xl mx-auto text-lg leading-relaxed font-semibold text-center`}>
          0xCUHKSZ is a student-led Blockchain Association at The Chinese University of Hong Kong, Shenzhen.
          We strive to bridge the gap between the university and the Web3 industry.
        </p>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className={`${inter.className} w-full h-[1100px] relative scroll-mt-22`}>
      <div className="w-full px-16 py-9 h-[450px] bg-[#704492] relative">
        <h1 className={`text-4xl mb-2 font-semibold`}>Who is 0xCUHKSZ?</h1>

        <div className="flex justify-end px-4">
          <p className={`max-w-xl text-lg leading-relaxed text-right font-semibold`}>
            Rooted in the fertile ground of innovation and technology of the Greater Bay Area, we are dedicated to the in-depth research of cutting-edge blockchain technologies and the exploration of their innovative applications.
            Our mission is to contribute to the development and maturation of the Web3.0 era.
          </p>
        </div>
      </div>

      <div className="w-full h-[650px] bg-[#9C7FB6] px-16 py-9">
        <h1 className={`text-4xl mb-2 text-right font-semibold`}>What is DAO Philosophy?</h1>

        <div className="flex flex-col md:flex-row py-6">
          <div>
            <p className={`max-w-xl text-lg leading-relaxed text-left font-semibold mb-10`}>
              DAO stands for Decentralized Autonomous Organization, a new way of organizing communities
              around shared goals, without relying on rigid hierarchies.
            </p>

            <p className={`max-w-xl text-lg leading-relaxed text-left font-semibold`}>
              At 0xCUHKSZ, we adopt the DAO philosophy by promoting flexibility, shared ownership, and
              initiative-based collaboration. Instead of fixed top-down roles, members contribute based on
              their interests and strengths, helping drive projects, events, and research.
            </p>
          </div>

          <div className="flex-1 flex justify-end">
            <Image
              alt=""
              src="/landscape-image.jpg"
              className="w-full max-w-md md:max-w-lg rounded-shadow-lg"
              width={1280}
              height={720}
            />
          </div>
        </div>

        <p className={`${inter.className} max-w-xl mx-auto text-lg leading-relaxed font-semibold text-center py-9`}>
          Whether you are interested in blockchain technology or interested in our community
          you are welcome to join us.
        </p>

      </div>

    </section>
  )
}

export function JoinSection() {
  return (
    <section id="join" className={`${inter.className} w-full h-[300px] bg-[#704492] relative scroll-mt-22`}>
      <div className="w-full px-16 py-9 h-[300px]">
        <h1 className={`text-4xl mb-2 text-center mb-10 font-semibold`}>Contact Us</h1>

        <div className="flex justify-center mb-5 text-lg">
          Email: st_blockchian@link.cuhk.edu.cn
        </div>

        <div className="flex justify-center text-lg">
          Telegram: https://t.me/+lwuNdqLl40E5YTg9
        </div>
      </div>
    </section>
  )
}

export function TeamSection() {
  return (
    <section id="team" className="w-full h-[2200px] md:h-[1000px] bg-[#9C7FB6] relative scroll-mt-22">
      <div className="w-full px-16 py-9 h-[2200px] md:h-[1000px]">
        <h1 className={`text-4xl mb-2 text-center mb-12 font-semibold`}>Our Team</h1>

        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-48 space-y-24 mb-24">
          <TeamIcon imagePath="" />
          <TeamIcon imagePath="" />
          <TeamIcon imagePath="" />
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-48 space-y-24">
          <TeamIcon imagePath="" />
          <TeamIcon imagePath="" />
          <TeamIcon imagePath="" />
        </div>
      </div>
    </section>
  )
}