'use client'

import TopNav from "@/ui/topnav";
import {WelcomeSection, AboutSection, JoinSection, TeamSection} from "./sections";
import Footer from "@/ui/footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col scroll-smooth">
      <TopNav />

      {/* Sections */}
      <main className="flex-1">
        <WelcomeSection />

        <AboutSection />

        <JoinSection />

        <TeamSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}