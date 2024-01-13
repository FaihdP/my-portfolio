import { useState } from "react"
import "../../css/HamburgerButton.css"
import HamburgerButtonLineOpen from "./HamburgerButtonLineOpen"
import HamburgerButtonLineClose from "./HamburgerButtonLineClose";

function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  function openHamburgerMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`Header-buttonContainer ${isOpen ? "is-open" : ""}`}>
      <div className="Header-buttonContainer-hamburgerMenu" onClick={openHamburgerMenu}></div>
      <div className="Header-buttonContainer-lines open" onClick={openHamburgerMenu}>
        <HamburgerButtonLineOpen isOpen={isOpen} />
        <HamburgerButtonLineOpen isOpen={isOpen} />
        <HamburgerButtonLineOpen isOpen={isOpen} />
      </div>
      <div className="Header-buttonContainer-lines close" onClick={openHamburgerMenu}>
        <HamburgerButtonLineClose isOpen={isOpen} />
        <HamburgerButtonLineClose isOpen={isOpen} />
      </div>
    </div>
  )
}

export default HamburgerButton
