import Header from './components/Header';
import ProjectSection from './components/ProjectSection';
// we’ll create these soon:
import Intro from './components/Intro';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Experience from './components/Experience'

function App() {
  return (
    <>
      <Header />
      <main className="pt-20 px-4">
        <main className="pt-20 px-4">
  <section id="intro"><Intro /></section>
  <section id="experience"><Experience /></section> {/* Add this line */}
  <section id="skills"><Skills /></section>
  <section id="education"><Education /></section>
  <section id="projects"><ProjectSection /></section>
  <section id="achievements"><Achievements /></section>
  <section id="contact"><Contact /></section>
</main>

      </main>
    </>
  );
}

export default App;
