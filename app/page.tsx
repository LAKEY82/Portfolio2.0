"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Smartphone,
  Database,
  Cloud,
  ChevronDown,
} from "lucide-react"

export default function BatmanPortfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isClient, setIsClient] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  //Audio
  useEffect(() => {
  const handleInteraction = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch((e) => {
        console.log("Autoplay blocked:", e)
      })
    }
    window.removeEventListener("click", handleInteraction)
    window.removeEventListener("scroll", handleInteraction)
  }

  window.addEventListener("click", handleInteraction)
  window.addEventListener("scroll", handleInteraction)

  return () => {
    window.removeEventListener("click", handleInteraction)
    window.removeEventListener("scroll", handleInteraction)
  }
}, [])

 useEffect(() => {
    setIsClient(true); // ensures DOM is available
  }, []);

const toggleAudio = () => {
  if (audioRef.current) {
    const audio = audioRef.current;
    const willMute = !isMuted;
    audio.muted = willMute;
    setIsMuted(willMute);

    // Try to play if it's paused
    if (audio.paused) {
      audio.play().catch((e) => {
        console.error("Audio play failed:", e);
      });
    }
  }
};


//audio log
useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = 1;

    console.log("🎵 Audio element loaded");

    if (!audioRef.current.paused) {
      console.log("▶️ Audio is already playing");
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("✅ Audio started playing after user interaction");
          })
          .catch((error) => {
            console.log("❌ Autoplay was blocked:", error);
          });
      }
    }
  }

  const handleInteraction = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().then(() => {
        console.log("🟢 Audio played after user interaction");
      }).catch((e) => {
        console.log("❌ Audio play failed after user interaction:", e);
      });
    }
    window.removeEventListener("click", handleInteraction);
    window.removeEventListener("scroll", handleInteraction);
  };

  window.addEventListener("click", handleInteraction);
  window.addEventListener("scroll", handleInteraction);

  return () => {
    window.removeEventListener("click", handleInteraction);
    window.removeEventListener("scroll", handleInteraction);
  };
}, []);

//other
useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = 0.3; // between 0.0 and 1.0
  }
}, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-400/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-yellow-400">LAK3Y</div>
            <div className="hidden md:flex space-x-8">
              {["hero", "about", "experience", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-yellow-400 ${
                    activeSection === section ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                LAKINDU PERERA
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-6">Mobile Application Developer</p>
              <p className="text-lg text-gray-400 mb-8">
                A passionate software engineer with 3+ years of experience, ready to protect your digital world with
                cutting-edge mobile and web solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 text-lg font-semibold"
                >
                  View My Arsenal
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 text-lg"
                >
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                {/* Main profile image */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg shadow-yellow-400/20">
                  <img
                    src="/face.png?height=100&width=800"
                    alt="Lakindu Perera"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative smaller images */}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full overflow-hidden border-2 border-yellow-400">
                  <img
                    src="/portrait.png?height=400&width=400"
                    alt="Coding"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full overflow-hidden border-2 border-yellow-400">
                  <img
                    src="/poi.png?height=400&width=400"
                    alt="Mobile Development"
                    className="w-full h-full object-cover"
                  />
                </div> */}
              </div>
            </div>
          </div>
          <div className="animate-bounce text-center mt-12">
            <ChevronDown className="w-8 h-8 mx-auto text-yellow-400" />
<audio ref={audioRef} loop muted={isMuted}>
  <source src="music.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

<Button variant="ghost" onClick={toggleAudio} className="text-yellow-400">
  {isMuted ? "Unmute Music" : "Mute Music"}
</Button>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">THE DEVELOPER BEHIND THE MASK</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Mission Statement</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A passionate and enthusiastic 24-year-old software engineering graduate with a strong desire to build a
                successful career in the software industry. Like Batman protects Gotham, I protect digital experiences
                through clean code and innovative solutions.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Eager to secure challenging positions that offer opportunities for continuous learning and professional
                growth. Highly adaptable, with a keen interest in exploring new technologies and staying updated with
                industry trends.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  verdentperera@gmail.com
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  0772648062
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  Malabe, Colombo, Sri Lanka
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Image gallery */}
              <div className="space-y-4">
                <div className="h-48 rounded-lg overflow-hidden border-2 border-yellow-400/50 shadow-lg shadow-yellow-400/10">
                  <img
                    src="/roof.png?height=500&width=400"
                    alt="Professional Photo 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* <div className="h-32 rounded-lg overflow-hidden border-2 border-yellow-400/50 shadow-lg shadow-yellow-400/10">
                  <img
                    src="/lap.png?height=400&width=300"
                    alt="Professional Photo 2"
                    className="w-full h-full object-cover"
                  />
                </div> */}
              </div>
              <div className="space-y-4 mt-8">
                {/* <div className="h-32 rounded-lg overflow-hidden border-2 border-yellow-400/50 shadow-lg shadow-yellow-400/10">
                  <img
                    src="/lap.png?height=400&width=300"
                    alt="Professional Photo 3"
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div className="h-48 rounded-lg overflow-hidden border-2 border-yellow-400/50 shadow-lg shadow-yellow-400/10">
                  <img
                    src="/lap.png?height=500&width=400"
                    alt="Professional Photo 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">BATTLE EXPERIENCE</h2>
          <div className="space-y-8">
            <Card className="bg-gray-800/50 border-yellow-400/20 hover:border-yellow-400/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-yellow-400">Associate Software Engineer</CardTitle>
                <CardDescription className="text-gray-300">
                  Xenosys Software Solutions • Dec '24 — Present
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2">
                  <li>• Led mobile application development using React Native with TypeScript</li>
                  <li>• Optimized app performance and maintained high code quality standards</li>
                  <li>• Mentored interns on React Native mobile projects</li>
                  <li>• Worked on C# .NET MVC web projects and React applications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-yellow-400/20 hover:border-yellow-400/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-yellow-400">Associate React Native Developer</CardTitle>
                <CardDescription className="text-gray-300">Agro World • Aug '24 — Nov '24</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2">
                  <li>• Designed and developed robust mobile applications for agricultural productivity</li>
                  <li>• Led cross-platform mobile app development improving user engagement</li>
                  <li>• Implemented TypeScript in React Native Expo environment</li>
                  <li>• Integrated Node.js and SQL backend systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-yellow-400/20 hover:border-yellow-400/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-yellow-400">Software Quality Assurance</CardTitle>
                <CardDescription className="text-gray-300">AFFINITI Innovations • Feb '23 — Aug '23</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2">
                  <li>• Performed manual and automation testing for CRM projects</li>
                  <li>• Wrote comprehensive test cases and executed testing procedures</li>
                  <li>• Conducted systems auditing and quality assurance processes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">ARSENAL & GADGETS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800/50 border-yellow-400/20 hover:border-yellow-400/50 transition-colors">
              <CardHeader className="text-center">
                <Code className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
                <CardTitle className="text-yellow-400">Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "Java", "Kotlin", "Python", "C#"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-yellow-400/20 text-yellow-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-yellow-400/20 hover:border-yellow-400/50 transition-colors">
              <CardHeader className="text-center">
                <Smartphone className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
                <CardTitle className="text-yellow-400">Mobile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "Flutter", "Android Studio", "Expo"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-yellow-400/20 text-yellow-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-yellow-400/20 hover:border-yellow-400/50 transition-colors">
              <CardHeader className="text-center">
                <Database className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
                <CardTitle className="text-yellow-400">Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "MongoDB", "Firebase"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-yellow-400/20 text-yellow-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-yellow-400/20 hover:border-yellow-400/50 transition-colors">
              <CardHeader className="text-center">
                <Cloud className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
                <CardTitle className="text-yellow-400">Cloud & Web</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Azure", "Google Cloud", "REST API", "Tailwind", "Bootstrap"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-yellow-400/20 text-yellow-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">MISSION REPORTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-yellow-400/20 hover:border-yellow-400/50 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-yellow-400">PlantCare Mobile App</CardTitle>
                <CardDescription className="text-gray-300">Agro World • Jun '24 — Nov '24</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">
                  Cross-platform agricultural mobile application built with React Native and Tailwind CSS.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    React Native
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    SQL
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-yellow-400/20 hover:border-yellow-400/50 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-yellow-400">Coffee Shop Mobile App</CardTitle>
                <CardDescription className="text-gray-300">Flutter Project • Mar '23</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">Cross-platform mobile application developed using Flutter with Node.js backend.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    Flutter
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    SQL
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-yellow-400/20 hover:border-yellow-400/50 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-yellow-400">Job Listing Web App</CardTitle>
                <CardDescription className="text-gray-300">React Project • Feb '24</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">Modern job listing web application frontend built with React and Vite.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    Vite
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    Tailwind
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-yellow-400/20 hover:border-yellow-400/50 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-yellow-400">KIYO Lanka Coco Products</CardTitle>
                <CardDescription className="text-gray-300">MERN Stack • Feb '21 — Apr '21</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">Full-stack web application using MERN stack for real-world client requirements.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    Express
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    Node.js
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-yellow-400/20 hover:border-yellow-400/50 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-yellow-400">FoodMart Mobile App</CardTitle>
                <CardDescription className="text-gray-300">Android Studio • Feb '21 — Apr '21</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">Android mobile application for online food ordering using Java and Firebase.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    Android Studio
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    Java
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    Firebase
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-yellow-400/20 hover:border-yellow-400/50 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-yellow-400">Vivid Labs Photography</CardTitle>
                <CardDescription className="text-gray-300">Web Development • May '20 — Aug '20</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">
                  Photography management system for booking photographers for events and occasions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    HTML
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    CSS
                  </Badge>
                  <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                    PHP
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50 relative overflow-hidden">
        {/* Batman Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg
            width="800"
            height="600"
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-yellow-400"
          >
            <path
              d="M400 150C350 150 300 170 260 200C220 230 200 270 200 300C200 330 220 370 260 400C300 430 350 450 400 450C450 450 500 430 540 400C580 370 600 330 600 300C600 270 580 230 540 200C500 170 450 150 400 150Z"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M320 250C340 230 370 220 400 220C430 220 460 230 480 250C500 270 510 300 500 330C490 360 470 380 450 390L400 420L350 390C330 380 310 360 300 330C290 300 300 270 320 250Z"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M280 280L320 300L280 320M520 280L480 300L520 320"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M200 300C180 280 160 260 150 240C140 220 140 200 150 180C160 160 180 150 200 150C220 150 240 160 260 180L300 220"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M600 300C620 280 640 260 650 240C660 220 660 200 650 180C640 160 620 150 600 150C580 150 560 160 540 180L500 220"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">CALL FOR BACKUP</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Ready for Your Next Mission?</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Whether you need a mobile application that saves the day or a web solution that protects your
                  business, I'm ready to join your team. Let's build something extraordinary together.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-yellow-400">verdentperera@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-gray-300">Phone</p>
                      <p className="text-yellow-400">0772648062</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-gray-300">Location</p>
                      <p className="text-yellow-400">Malabe, Colombo, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-400/20 rounded-lg focus:border-yellow-400 focus:outline-none text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-400/20 rounded-lg focus:border-yellow-400 focus:outline-none text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-yellow-400/20 rounded-lg focus:border-yellow-400 focus:outline-none text-white resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 py-3 text-lg font-semibold">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-yellow-400/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Lakindu Perera. Protecting the digital realm, one line of code at a time.
            </div>
            <div className="flex space-x-6">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-yellow-400">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-yellow-400">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
