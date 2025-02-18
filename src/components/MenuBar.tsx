import React from 'react'
import DataManager from './DataManager'

interface MenuBarProps {
  className?: string
  dataManager: DataManager
  setDataManager: React.Dispatch<React.SetStateAction<DataManager>>
  files: File[]
}

const MenuBar: React.FC<MenuBarProps> = ({ className, dataManager, setDataManager, files }) => {
  const handleOpen = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const csvString = e.target?.result as string
        dataManager.parseCsvString(file, csvString)
      }
      reader.readAsText(file)
    })
    console.log('Files processed')
  }

  const handleSave = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    console.log('Save file')
    // Add your file save logic here
  }

  return (
    <nav className={`navbar bg-primary navbar-expand-lg navbar-light bg-light ${className}`}>
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="fileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              File
            </a>
            <div className="dropdown-menu" aria-labelledby="fileDropdown">
              <a className="dropdown-item" href="#" onClick={handleOpen}>Open File(s)</a>
              <a className="dropdown-item" href="#" onClick={handleSave}>Save File</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Help</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MenuBar