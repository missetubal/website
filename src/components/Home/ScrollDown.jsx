import React from 'react'
import './Home.css'

export const ScrollDown = () => {
  return (
    <div className="scroll">
        <a href="#about" className='mouse_wrapper'>
            <span className='scroll_name'>Scroll Down</span>
            <span className="mouse">
                <span className="wheel"></span>
            </span>

        </a>
    </div>
  )
}
