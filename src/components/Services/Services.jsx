import React from "react";
import './Services.css'
import { data } from "./ServicesData";

export const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Services</h2>

      <div className="services_container grid">
        {data.map((service) => {
          return (
            <div className="service_card" key={service.id}>
              <img src={service.image} alt="" className="service_img"/>
              <h3 className="service_title">{service.title}</h3>

              <p className="service_description">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
