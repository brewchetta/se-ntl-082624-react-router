import Header from "./Header"
// import TodoContainer from "./TodoContainer"
// import About from "./About"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
