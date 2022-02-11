import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import { GithubProvider } from "./context/github/GithubContext"
import React from "react"

function App() {
  return (
    <div className="App">
      <GithubProvider>
        <BrowserRouter>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container max-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </GithubProvider>
    </div>
  )
}

export default App
