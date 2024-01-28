function LineClose({ isOpen }: { isOpen: boolean}) {
  return (
    <div className={
      `Header-buttonContainer-lines-line ${isOpen ? "close-in-animation" : "close-out-animation"}`
    }/>
  )
}

export default LineClose
