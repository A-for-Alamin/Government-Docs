import './App.css'

import { Footer } from './components/shared/footer';
import { Navbar } from './components/shared/navbar';

function App() {

  return (
    <>
      <main className='bg-slate-400'>
        <Navbar/>
        <Footer/>
      </main>
    </>
  )
}

export default App
