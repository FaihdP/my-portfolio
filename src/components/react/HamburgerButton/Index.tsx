import { useState } from "react"
import "../../../css/HamburgerButton.css"
import LineOpen from "./LineOpen";
import LineClose from "./LineClose";
import Menu from "./Menu"

function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  function openHamburgerMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`Header-buttonContainer ${isOpen ? "is-open" : ""}`}>
      <div className="Header-buttonContainer-hamburgerMenu" onClick={openHamburgerMenu}></div>
      <div className="Header-buttonContainer-lines open" onClick={openHamburgerMenu}>
        <LineOpen isOpen={isOpen} />
        <LineOpen isOpen={isOpen} />
        <LineOpen isOpen={isOpen} />
      </div>
      <div className="Header-buttonContainer-lines close" onClick={openHamburgerMenu}>
        <LineClose isOpen={isOpen} />
        <LineClose isOpen={isOpen} />
      </div>
      <Menu isOpen={isOpen} />
    </div>
  )
}

export default HamburgerButton
