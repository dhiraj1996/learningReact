
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {

  return (
    <>
    <h1 className="text-3xl font-bold underline" >I am Tailwind</h1>
    <Cards system ="Mackbook" btnText="Read Mac"/>
    <Cards system="Alienware" />
    </>
  )
}

export default App
