function LineOpen({ isOpen }: { isOpen: boolean}) {
  return (
    <div className={`Header-buttonContainer-lines-line ${isOpen ? "open-out-animation" : "open-in-animation"}`} />
  )
}

export default LineOpen
