"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openResume = () => {
    window.open("https://drive.google.com/file/d/15r5brsTYrwd9lguZidgQ8fE01BDioiHG/view?usp=drive_link", "_blank")
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://drive.google.com/uc?export=view&id=1OEQw7wrOzd-6ow8N5Xc0UwtbRtv5I5HN"
          alt="Professional background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-2xl sm:text-3xl font-medium">Hi 👋</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            I'm SATYA SAI ESWAR
          </h1>
          <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto text-pretty text-white/80">
            I'm a B.Tech 3rd year student at SRM Institute of Science and Technology, specializing in CSE with AI & ML.
            I'm passionate about exploring the possibilities of machine learning and artificial intelligence. Always
            eager to learn and innovate!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToContact} className="bg-white text-primary hover:bg-white/90">
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToProjects}
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              View My Work
            </Button>
          <!--  <Button
              size="lg"
              variant="outline"
              onClick={openResume}
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Download className="h-4 w-4 mr-2" />
              View My Resume
            </Button> -->
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white" />
        </div>
      </div>
    </section>
  )
}
