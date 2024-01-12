import { useState } from "react"
import "../../css/index.css"

function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  function openHamburgerMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`Header-buttonContainer ${isOpen ? "is-open" : ""}`}>
      <div className={`Header-buttonContainer-hamburgerMenu`} onClick={openHamburgerMenu}></div>
      <div className={`Header-buttonContainer-lines`} onClick={openHamburgerMenu}>
        <div className={`Header-buttonContainer-lines-line ${isOpen ? "open-out-animation" : "open-in-animation"}`} />
        <div className={`Header-buttonContainer-lines-line ${isOpen ? "open-out-animation" : "open-in-animation"}`} />
        <div className={`Header-buttonContainer-lines-line ${isOpen ? "open-out-animation" : "open-in-animation"}`} />
      </div>
    </div>
  )
}

export default HamburgerButton
