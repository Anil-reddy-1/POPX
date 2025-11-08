import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as ReactRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <ReactRouter>
        <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='/page4' element={<Page4 />} />
        </Routes>
      </ReactRouter>


    </div>
  )
}

export default App
