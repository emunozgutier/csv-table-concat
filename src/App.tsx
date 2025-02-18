// src/App.tsx
import React, { useState } from 'react'
import MenuBar from './components/MenuBar'
import DropZone from './components/DropZone'
import './App.css'

function App() {
  const [files, setFiles] = useState<File[]>([])

  return (
    <div className="d-flex flex-column" style={{ height: '100vh' }}>
      <MenuBar />
      <DropZone className="flex-grow-1" files={files} setFiles={setFiles} />
    </div>
  )
}

export default App