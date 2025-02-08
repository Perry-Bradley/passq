import { BarChart3, BookOpen, Clock, Target } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { SiteHeader } from "../../components/site-header" // Note the double dots

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center gap-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Questions Attempted</p>
                  <h3 className="text-2xl font-bold">248</h3>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center gap-4">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Study Time</p>
                  <h3 className="text-2xl font-bold">12.5 hrs</h3>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center gap-4">
                <Target className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Accuracy Rate</p>
                  <h3 className="text-2xl font-bold">76%</h3>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center gap-4">
                <BarChart3 className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Current Streak</p>
                  <h3 className="text-2xl font-bold">5 days</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold">Recent Progress</h3>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Mathematics</span>
                    <span className="text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Physics</span>
                    <span className="text-muted-foreground">60%</span>
                  </div>
                  <Progress value={60} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Chemistry</span>
                    <span className="text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} />
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold">Recommended Practice</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                    <p className="font-medium">Calculus Review</p>
                    <p className="text-sm text-muted-foreground">25 questions • 30 mins</p>
                  </div>
                  <Button>Start</Button>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                    <p className="font-medium">Physics Mechanics</p>
                    <p className="text-sm text-muted-foreground">20 questions • 25 mins</p>
                  </div>
                  <Button>Start</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

