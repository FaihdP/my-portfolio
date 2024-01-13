function HamburgerButtonLineClose({ isOpen }: { isOpen: boolean}) {
  return (
    <div className={
      `Header-buttonContainer-lines-line ${isOpen ? "close-in-animation" : ""}`
    }/>
  )
}

export default HamburgerButtonLineClose
