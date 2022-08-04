import React from 'react'
import { resumeData } from './ResumeData'
import { Card } from './Card'
import './Resume.css'

export const Resume = () => {
  return (
    <section className="resume container section" id='resume'>
        <h2 className="section_title">Experience</h2>
        <div className="resume_container grid">
            <div className="timeline grid">
                {resumeData.map((xp)=>{
                    if(xp.category==='education'){
                        return(
                            <Card key={xp.id} icon ={xp.icon} title={xp.title} year={xp.year} desc = {xp.desc} />
                        )
                    }
                })}
            </div>

            <div className="timeline grid">
                {resumeData.map((xp)=>{
                    if(xp.category==='experience'){
                        return(
                            <Card key={xp.id} icon ={xp.icon} title={xp.title} year={xp.year} desc = {xp.desc} />
                        )
                    }
                })}
            </div>
        </div>
    </section>
  )
}
