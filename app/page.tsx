import Image from "next/image"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedTitle } from "@/components/animated-title"
import { ResumeViewer } from "@/components/resume-viewer"
import { PdfViewer } from "@/components/pdf-viewer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold font-serif text-black">Jenny Nguyen</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="text-gray-600 hover:text-black transition font-times">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-black transition font-times">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-black transition font-times">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-600 hover:text-black transition font-times">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-black transition font-times">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pink-light via-pink-soft to-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <AnimatedTitle name="Jenny Nguyen" title="Computer Science Student | Aspiring Software Engineer" />
              <p className="text-gray-700 mb-8 max-w-lg font-times text-lg">
                I'm currently a senior at the University of Miami double majoring in Computer Science and Data Science &
                Artificial Intelligence with a minor in mathematics. My expected graduation is May 2026.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-black hover:bg-gray-800">
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-black text-black hover:bg-pink-light bg-transparent"
                >
                  <a href="#projects">View Projects</a>
                </Button>
                <ResumeViewer
                  className="bg-gradient-to-r from-pink-light to-pink-soft hover:from-pink-soft hover:to-pink-light text-black border border-pink-medium"
                  variant="secondary"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Resume
                </ResumeViewer>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image src="/jenny-profile.png" alt="Jenny Nguyen" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-6 font-times text-lg">
              I’m passionate about using technology and data to solve complex problems and create real-world impact. I enjoy exploring new tools and approaches and 
              thrive when tackling challenges that require critical thinking and innovation.

              </p>
              <p className="text-gray-700 mb-6 font-times text-lg">
              I work best in fast-paced, challenging environments, combining technical expertise with adaptability and 
              focus. I’m energized by collaborating with teams to deliver meaningful results.
               
              </p>
              <p className="text-gray-700 font-times text-lg">
              I’m especially interested in opportunities at the intersection of 
              technology and finance, where I can apply data-driven insights to build innovative solutions
              and make an impact.

         
              </p>
            </div>
          </div>
          
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gradient-to-r from-pink-light/30 to-pink-soft/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <SkillCard title="Programming Languages" skills={["Java", "Python", "R", "C"]} />
              <SkillCard title="Web Development" skills={["HTML", "CSS", "Git", "GitHub"]} />
              <SkillCard title="Finance & Business" skills={["Microsoft Excel", "Microsoft PowerPoint", "Microsoft Word", "Basic Financial Modeling", "Data Visualization"]} />
              <SkillCard title="Interpersonal & Professional" skills={["Communication", "Collaboration", "Problem-Solving", "Adaptability"]} />


            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ProjectCard
                title="Automated Intrusion Detection: Evaluating Password Policies and Credential Security"
                description="A semester long project for my Cybersecurity class where I evaluated the effectiveness of various password policies against modern cracking techniques such as Hashcat."
                technologies={["Python", "Kali Linux", "Hashcat"]}
                link="https://github.com/xjennynguyen/password-policy-evaluator/tree/main"
                image="/cybersecurity.jpg?height=200&width=400"
                reportUrl="/CSC516.pdf"
                reportTitle="Automated Intrusion Detection Report"
              />

              <ProjectCard
                title="Enhanced Boat Management System"
                description="An interactive Boat Management in C designed to track inventory, handle payments, and store records using CSV files with memory-efficient data structures."
                technologies={["C", "Unix"]}
                link="https://github.com/xjennynguyen/Enhanced-Boat-Management-System/tree/main"
                image="/boat.jpg?height=200&width=400"
              />
              <ProjectCard
                title="Connect Four"
                description="Designed and developed a fully functional Connect 4 game from scratch, demonstrating my skills in problem-solving, user interaction, and game logic."
                technologies={["Python", "Google Colab"]}
                link="https://github.com/xjennynguyen/connect_four-/tree/main"
                image="/connect_four.jpg?height=300&width=300"
                imageObjectFit="contain"
              />

              <ProjectCard
                title="Wordle Game"
                description="A remake of the popular Wordle word puzzle game developed in Java. The objective of the game is to guess a hidden letter word within six tries, receiving feedback on letter correctness and placement."
                technologies={["Java", "IntelliJ IDEA"]}
                link="https://github.com/xjennynguyen/wordle"
                image="/wordle_pic.jpg?height=200&width=400"
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gradient-to-l from-pink-light/30 to-pink-soft/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">Education</h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative pl-8 border-l-2 border-black pb-12">
                <div className="absolute w-4 h-4 bg-black rounded-full -left-[9px] top-1"></div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-black">University of Miami</h3>
                  <p className="text-gray-600">B.S. Computer Science and Data Science & Artificial Intelligence</p>
                  <p className="text-gray-600">Minor in Mathematics</p>
                  <p className="text-gray-500">Expected May 2026</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-black text-lg">Relevant Coursework:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                    <li className="text-gray-700 text-lg">Artificial Intelligence</li>
                    <li className="text-gray-700 text-lg">Computer Organization and Architecture</li>
                    <li className="text-gray-700 text-lg">Computer Programming II</li>
                    <li className="text-gray-700 text-lg">Cybersecurity</li>
                    <li className="text-gray-700 text-lg">Data Structures & Algorithms</li>
                    <li className="text-gray-700 text-lg">Discrete Mathematics</li>
                    <li className="text-gray-700 text-lg">Intro to Python for Scientists</li>
                    <li className="text-gray-700 text-lg">Machine Learning</li>
                    <li className="text-gray-700 text-lg">Probability & Statistics</li>
                    <li className="text-gray-700 text-lg">Software Engineering</li>
                    <li className="text-gray-700 text-lg ">System Programming</li>
                    <li className="text-gray-700 text-lg">Theory of Computing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-16 bg-white border-t border-b border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-black">My Resume</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
              Want to learn more about my experience, skills, and qualifications? View my resume for a full overview of
              my experiences and skills! 👩🏻‍💻.
            </p>
            <ResumeViewer size="lg" className="bg-black hover:bg-gray-800">
              <FileText className="w-5 h-5 mr-2" />
              View Full Resume
            </ResumeViewer>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">Contact Me</h2>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col space-y-6">
                <a
                  href="mailto:jenny.jln.nguyen11@gmail.com"
                  className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-pink-light transition"
                >
                  <Mail className="w-6 h-6 mr-4 text-black" />
                  <span className="text-black">jenny.jln.nguyen11@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jnguyen04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-pink-light transition"
                >
                  <Linkedin className="w-6 h-6 mr-4 text-black" />
                  <span className="text-black">linkedin.com/in/jnguyen04</span>
                </a>
                <a
                  href="https://github.com/xjennynguyen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-pink-light transition"
                >
                  <Github className="w-6 h-6 mr-4 text-black" />
                  <span className="text-black">github.com/xjennynguyen</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Jenny Nguyen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <Card className="border-gray-200 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-pink-light/50 to-pink-soft/30">
        <CardTitle className="text-black">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-sm py-1 bg-gradient-to-r from-pink-light to-pink-soft text-black hover:from-pink-soft hover:to-pink-light"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
  link,
  image,
  imageObjectFit = "cover",
  reportUrl,
  reportTitle,
}: {
  title: string
  description: string
  technologies: string[]
  link: string
  image?: string
  imageObjectFit?: "cover" | "contain"
  reportUrl?: string
  reportTitle?: string
}) {
  return (
    <Card className="h-full flex flex-col border-gray-200 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-black text-lg leading-tight">{title}</CardTitle>
      </CardHeader>
      {image && (
        <div className="h-48 relative mx-6 mb-4 rounded-lg overflow-hidden bg-gray-50">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`${imageObjectFit === "contain" ? "object-contain" : "object-cover"}`}
          />
        </div>
      )}
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="text-sm mb-4 flex-1">{description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs border-gray-300 text-black">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <div className="flex gap-2 w-full">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-black text-black hover:bg-pink-light flex-1 bg-transparent"
          >
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <Github className="w-4 h-4 mr-2" />
              View Project
            </a>
          </Button>
          {reportUrl && reportTitle && (
            <PdfViewer
              pdfUrl={reportUrl}
              title={reportTitle}
              variant="outline"
              size="sm"
              className="border-black text-black hover:bg-gray-100 flex-1"
            >
              <FileText className="w-4 h-4 mr-2" />
              View Report
            </PdfViewer>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
