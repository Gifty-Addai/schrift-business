import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Marquee } from './components/sections/Marquee';
import { Experts } from './components/sections/Experts';
import { Services } from './components/sections/Services';
import { TechStack } from './components/sections/TechStack';
import { Process } from './components/sections/Process';
import { Projects } from './components/sections/Projects';
import { Team } from './components/sections/Team';
// import { Blog } from './components/sections/Blog';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <Layout>
      {/* 1. Hero Section (Dark) */}
      <Hero />

      {/* Marquee Separator */}
      <Marquee />

      {/* 2. Experts Section (Light Cream) */}
      <Experts />

      {/* 3. Services & TechStack Section (Dark) */}
      <Services />
      <TechStack />

      {/* Marquee Separator */}
      <Marquee />

      {/* 4. Workflow Process Timeline (Light Cream) */}
      <Process />

      {/* 5. Projects Showcase Portfolio (Light Cream) */}
      <Projects />

      {/* 6. Creative Team Section (Light Cream) */}
    {/*  <Team /> */}

      {/* Marquee Separator */}
      <Marquee />

      {/* 7. Blog Insights Section (Dark) — commented out for now */}
      {/* <Blog /> */}

      {/* 8. Testimonials Section (Dark) */}
      <Testimonials />

      {/* 9. Contact / Discuss Form (Light Cream) */}
      <Contact />
    </Layout>
  );
}

export default App;
