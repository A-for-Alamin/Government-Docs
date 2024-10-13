import './App.css'
import { Navbar } from './components/shared/navbar';
import { Hero } from './components/home/hero';
import { Footer } from './components/shared/footer';
import { ProblemSolution } from './components/home/problemsolution';

function App() {

  return (
    <>
      <main className='min-h-svh font-nunito-sans bg-[url(img/hero-bg.svg)] bg-no-repeat'>
        <Navbar/>
        <Hero/>
        <ProblemSolution/>
        <Footer/>
      </main>
    </>
  )
}

export default App
