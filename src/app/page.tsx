import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import {Bot} from "lucide-react"

export const metadata: Metadata = {
  title: "Amirul Adham - Home",
};

export default function Home() {
  return (
    <section className="space-y-`bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 item-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Hi, I'm Amirul Adham 👋</H1>
          <p className="text-center sm:text-start">
            I'm, a passionate web developer crafting modern, user-focused
            solutions with React, Next.js, and TypeScript. Explore my portfolio
            to see how I can bring value to your projects!
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/profile.png"
            alt="Profile Picture"
            height={300}
            width={300}
            className=" rounded-full border-2 object-cover shadow-md "
          />
        </div>
      </section>
      <section className="space-y3 text-center">
        <H2>Ask the chatbot anything about me!</H2>
        <p>
          Click the little <Bot className="inline pb-1" /> icon in the bottom
          right corner to start a conversation with the chatbot.
        </p>
      </section>
    </section>
  );
}
