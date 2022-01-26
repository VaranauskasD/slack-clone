import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Header, Sidebar, Chat } from './components'
import { appSlice, selectRoomId } from './features/counter/appSlice'

const AppBody = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`

const App = () => {
  const roomId = useSelector(selectRoomId)
  console.log(roomId)
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Header />
          <AppBody>
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Chat channelName={roomId} />} />
            </Routes>
          </AppBody>
        </React.Fragment>
      </Router>
    </div>
  )
}

export default App
