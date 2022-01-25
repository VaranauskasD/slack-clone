import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

import { Home } from './pages'
import { Header, Sidebar } from './components'

const AppBody = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`

const App = () => {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </AppBody>
        </React.Fragment>
      </Router>
    </div>
  )
}

export default App
