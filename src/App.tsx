import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={Router} />
  )
}

export default App
