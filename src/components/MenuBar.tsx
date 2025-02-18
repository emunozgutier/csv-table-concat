// src/components/MenuBar.tsx
import React from 'react'

interface MenuBarProps {
  className?: string
}

const MenuBar: React.FC<MenuBarProps> = ({ className }) => {
  const handleOpen = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    console.log('Open file')
    // Add your file open logic here
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