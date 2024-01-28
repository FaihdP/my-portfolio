import GithubIcon from "../../../images/github-mark.png"
import Option from "../Menu/Option"
import LinkedInIcon from "../../../images/icons8-linkedin-48.png"

function Menu({ isOpen }: { isOpen: boolean}) {
  return (
    <>
      <div className={`Header-buttonContainer-shadow ${isOpen ? "is-open" : ""} first-open`} />
      <div className={`Header-buttonContainer-shadow ${isOpen ? "is-open" : ""} second-open`} />
      <div className={`Header-buttonContainer-shadow ${isOpen ? "is-open" : ""} third-open`} />
      <div className="Header-buttonContainer-menu">
        <Option isOpen={isOpen} href="https://github.com/FaihdP" src={GithubIcon.src} alt="GithubIcon" style="firts-option" />
        <Option isOpen={isOpen} href="https://www.linkedin.com/in/faihd-pineda/" src={LinkedInIcon.src} style="second-option" alt="LinkedInIcon" />
      </div>
    </>
  )
}

export default Menu
