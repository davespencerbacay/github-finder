import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import Alert from "./components/layout/Alert"
import User from "./pages/User"

import GithubState from "./context/github/GithubState"
import AlertState from "./context/alert/AlertState"

function App() {
  return (
    <div className="App">
      <GithubState>
        <AlertState>
          <BrowserRouter>
            <div className="flex flex-col justify-between h-screen">
              <Navbar />
              <main className="container mx-auto px-3 pb-12">
                <Alert />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/user/:login" element={<User />} />
                  <Route path="/notfound" element={<NotFound />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </AlertState>
      </GithubState>
    </div>
  )
}

export default App
