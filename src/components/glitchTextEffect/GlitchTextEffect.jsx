import React from 'react'
import './glitchTextEffect.css'

export const GlitchTextEffect = ({text}) => {
  return (
    <>
        <p className="glitch">
            <span aria-hidden="true">{text}</span>
                {text}
            <span aria-hidden="true">{text}</span>
        </p>  
    </>
  )
}

