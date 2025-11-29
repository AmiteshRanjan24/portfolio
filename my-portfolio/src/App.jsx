import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
function App() {
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
