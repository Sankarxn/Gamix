import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Popgames from './Components/Popgames'
import Gamelibrary from './Components/Gamelibrary'
import Footbar from './Components/Footbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-dark min-vh-100">
      <Nav />
      <br />
      <Hero />
      <Popgames />
      <Gamelibrary />
      <Footbar />
    </div>
  )
}

export default App
