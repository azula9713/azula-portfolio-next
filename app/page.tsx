import Header from "./components/Header";
import About from "./components/Home/About";
import Articles from "./components/Home/Articles";
import Education from "./components/Home/Education";
import Profile from "./components/Home/Profile";
import Projects from "./components/Home/Projects";
import Skills from "./components/Home/Skills";
import WorkExperience from "./components/Home/WorkExperience";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <div className="w-full max-w-2xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
          <Profile />
          <About />
          <Projects />
          {/* Testimonials */}
          {/* End Testimonials */}
          <Skills />
          <WorkExperience />
          <Education />
          <Articles />
        </div>
      </main>
    </>
  );
}
