import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get in Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk</h3>
          <p className="contact_details">Don't like forms? Send me an email</p>
        </div>

        <form action="" className="contact_form">
          <div className="form_group">
            <div className="form_div">
              <input type="text" className="form_input" placeholder="Name" />
            </div>

            <div className="form_div">
              <input type="email" className="form_input" placeholder="Email" />
            </div>
          </div>
          <div className="form_div">
            <input type="text" className="form_input" placeholder="Subject" />
          </div>
          <div className="form_div div_textarea">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="form_input"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};
