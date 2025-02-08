import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">PASSQ</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80">
            Home
          </Link>
          <Link href="/subjects" className="transition-colors hover:text-foreground/80">
            Subjects
          </Link>
          <Link href="/dashboard" className="transition-colors hover:text-foreground/80">
            Dashboard
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-foreground/80">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center justify-end space-x-4">
          <ModeToggle />
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  )
}