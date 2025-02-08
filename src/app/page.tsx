import { Book, Brain, Trophy } from 'lucide-react'
import Link from "next/link"
import { Button } from "../components/ui/button"
import { SiteHeader } from "../components/site-header"
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Master Your Exams with Past Questions
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Access thousands of past questions across various subjects. Practice, learn, and improve your exam
              performance with our comprehensive question bank.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/dashboard">Start Learning</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Book className="h-12 w-12" />
                <div className="space-y-2">
                  <h3 className="font-bold">Extensive Library</h3>
                  <p className="text-sm text-muted-foreground">
                    Access questions from various exam boards and subjects
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Brain className="h-12 w-12" />
                <div className="space-y-2">
                  <h3 className="font-bold">Smart Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    AI-powered question recommendations based on your performance
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Trophy className="h-12 w-12" />
                <div className="space-y-2">
                  <h3 className="font-bold">Track Progress</h3>
                  <p className="text-sm text-muted-foreground">Monitor your improvement with detailed analytics</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

