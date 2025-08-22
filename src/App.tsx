import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Transparency from './components/Transparency'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-gray-300">
            <h2 className="text-3xl font-bold glow-text">About Chainfluence</h2>
            <p className="mt-4">We unite performance marketing with verifiable on-chain proofs on Aptos to build trust across advertisers, publishers, and users.</p>
        </div>
        </section>
        <Transparency />
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold glow-text">Contact</h2>
            <p className="mt-4 text-gray-300">Have questions? Reach us at contact@chainfluence.app</p>
          </div>
        </section>
        <Dashboard />
      </main>
      <Footer />
    </div>
  )
}

