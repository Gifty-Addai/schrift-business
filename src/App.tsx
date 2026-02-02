import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <TechStack />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;
