"use client"

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedTreks from '@/components/FeaturedTreks';
import TrekFinder from '@/components/TrekFinder';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <FeaturedTreks />
        <TrekFinder />
        <Features />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;