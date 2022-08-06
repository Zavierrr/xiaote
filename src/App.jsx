import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import RoutesConfig from './routes'

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesConfig />
      <Footer />
    </div>
  )
}

export default App
