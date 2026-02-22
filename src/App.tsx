import Hero from './components/Hero';
import FeaturesBento from './components/FeaturesBento';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen bg-zinc-950 text-zinc-50 font-sans overflow-x-hidden selection:bg-rose-500/30 selection:text-white">
      <Hero />
      <FeaturesBento />
      <Footer />
    </main>
  );
}

export default App;
