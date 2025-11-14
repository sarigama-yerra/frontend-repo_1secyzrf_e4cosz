import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-indigo-50 to-sky-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <Hero />

      <Section id="about" title="About">
        <div className="prose max-w-none text-gray-700 dark:text-gray-300">
          <p>
            I’m Satyam Kumar Jha, a 3rd year student at Global Academy of Technology. I love building software that
            blends intelligent systems with clean, user‑focused design. My primary languages are Python, Java, and C,
            and I enjoy computer vision, deep learning, and full‑stack development.
          </p>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <Skills />
      </Section>

      <Section id="projects" title="Projects">
        <Projects />
      </Section>

      <Section id="certificates" title="Certificates">
        <Certificates />
      </Section>

      <Section id="hobbies" title="Hobbies">
        <Hobbies />
      </Section>

      <Section id="contact" title="Contact" subtitle="Send me a message – I’ll reply by email.">
        <Contact />
      </Section>

      <footer className="py-10 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Satyam Kumar Jha
      </footer>
    </div>
  )
}

export default App
