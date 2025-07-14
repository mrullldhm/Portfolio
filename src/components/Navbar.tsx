import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background">
      <div className="max-w-3xl mx-auto flex flex-wrap justify-between gap-3 px-3 py-5">
        <nav className="space-x-4 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/social">Social Media</Link>
        </nav>

        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
