import React from 'react'
import { Colors } from '../../../constants'

interface optionProps { 
  isOpen: boolean, 
  href: string, 
  src: string, 
  style: string, 
  alt: string 
}

function Option({ isOpen, href, src, style, alt }: optionProps) {
  return (
    <a href={href} target="_blank">
      <div 
        className={`Header-buttonContainer-menu-option ${isOpen ? "is-open" : ""} ${style}`} 
        style={{background: Colors.OFF_WHITE}}
      >
        <img src={src} alt={alt} width="40" />
      </div>
    </a>
  )
}

export default Option
