import './app.scss'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <section id='Homepage'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='About'>About</section>
      <section id='My Skills'>My Skills</section>
      <section id='Work'>Work</section>
      <section id='Blog'>Blog</section>
      <section id='Contact'>Contact</section>
    </div>
  )
}

export default App;
