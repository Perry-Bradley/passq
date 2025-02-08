import { Book, Calculator, FlaskRoundIcon as Flask, Globe, LanguagesIcon as Language, Palette } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "../../components/site-header" // Note the double dots

const subjects = [
  {
    name: "Mathematics",
    icon: Calculator,
    description: "Algebra, Calculus, Geometry, and more",
    questionCount: "2,500+",
  },
  {
    name: "Sciences",
    icon: Flask,
    description: "Physics, Chemistry, and Biology",
    questionCount: "3,000+",
  },
  {
    name: "Languages",
    icon: Language,
    description: "English, French, Spanish, and more",
    questionCount: "1,800+",
  },
  {
    name: "History",
    icon: Globe,
    description: "World History, Local History, and Civics",
    questionCount: "1,500+",
  },
  {
    name: "Arts",
    icon: Palette,
    description: "Visual Arts, Music, and Drama",
    questionCount: "1,200+",
  },
  {
    name: "Literature",
    icon: Book,
    description: "Poetry, Prose, and Literary Analysis",
    questionCount: "1,600+",
  },
]

export default function SubjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <div className="mx-auto max-w-[64rem] space-y-8">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Explore Subjects</h1>
              <p className="mx-auto max-w-[42rem] text-muted-foreground sm:text-xl sm:leading-8">
                Choose from our wide range of subjects and start practicing with thousands of past exam questions.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subjects.map((subject) => (
                <div
                  key={subject.name}
                  className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-foreground/50"
                >
                  <div className="flex items-center gap-4">
                    <subject.icon className="h-8 w-8" />
                    <div>
                      <h3 className="font-semibold">{subject.name}</h3>
                      <p className="text-sm text-muted-foreground">{subject.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{subject.questionCount} questions</span>
                    <Button variant="ghost" size="sm">
                      Start Practice
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

