import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vishwajeet - Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio website of Vishwajeet, a Full Stack Developer specializing in web development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Vishwajeet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
