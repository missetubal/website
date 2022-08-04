import React, { useState } from "react";
import { portfolioData } from "./PorfolioData";
import "./Portfolio.css";

export const Portfolio = () => {
  const [items, setItems] = useState(portfolioData);
  const filterItem = category =>{
    const updateItens = portfolioData.filter((i) => i.category === category)
    setItems(updateItens)
  }
  return (
    <section className="work container section" id="work">
      <h2 className="section_title">Projects</h2>
      <div className="work_filters">
        <span className="work_item" onClick={()=> setItems(portfolioData)}>Everything</span>
        <span className="work_item" onClick={()=> filterItem('Mobile')}>Mobile</span>
        <span className="work_item" onClick={()=> filterItem('Web')}>Web</span>
      </div>

      <div className="work_container grid">
        {items.map((item) => {
          return (
            <div className="work_card" key={item.id}>
              <div className="work_thumbnail">
                <img src={item.image} alt="" className="work_img" />
                <div className="work_mask"></div>
              </div>
              <span className="work_category">{item.category}</span>
              <h3 className="work_title">{item.title}</h3>
              <div className="access_links">
                {item.link ? (
                  <a href={item.link} className="work_button" target='_blank' rel="noreferrer">
                    <i className="icon-link work_button-icon"></i>
                  </a>
                ) : (
                  <a href={item.github} className="work_button">
                    <i className="fab fa-github work_button-icon"></i>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
