import React from 'react'
import './Resume.css'

interface CardProps{
  icon: string,
  title: string,
  desc: string,
  year: string,
  id: number,
  category: string,

}

export const Card: React.FC <CardProps> = (props) => {
  return (
    <div className="timeline_item">
      <i className={props.icon}></i>
      <span className='timeline_date'>{props.year}</span>
      <h3 className="timeline_title">{props.title}</h3>
      <p className="timeline_text">{props.desc}</p>
    </div>
  )
}
