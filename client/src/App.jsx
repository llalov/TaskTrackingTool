import {Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header"
import Home from './components/home/Home'

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Routes>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
