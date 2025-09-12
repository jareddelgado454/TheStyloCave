import HeroSection from "@/components/HeroSection";
import MainHeader from "@/components/MainHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col bg-zinc-900">
      <HeroSection />
      <h1 className="text-white text-4xl font-montserrat"></h1>
    </div>
  );
}
