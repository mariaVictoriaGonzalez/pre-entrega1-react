import { useState } from 'react'
import { NavBar } from './components/navbar'
import { ListContainer } from './components/ListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <ListContainer greeting={"Bienvenidos a la tienda!"}/>
    </>
  )
}

export default App
