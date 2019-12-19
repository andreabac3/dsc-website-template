import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

const Workshops = () => (
  <section
    id="workshops"
    className="section-spacer workshops-section bg-very__gray"
  >
    <div className="container">
      <header className="section-header text-center">
        <h2 className="section-title">Events & Workshops</h2>
        <p className="section-subtitle">
          Come learn, share and connect with us in person.
        </p>
      </header>
      <div className="workshops-type-switch">
        <ul className="nav nav-pills justify-content-center js-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#upcoming">
              Upcoming Events
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#past">
              Past Events
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div
          className="tab-pane active"
          id="upcoming"
          role="tabpanel"
          aria-labelledby="upcoming"
        >
          <div className="row">
            <div className="message-wrapper col-12">
              <h2 className="message-text">Loading...</h2>
            </div>
          </div>
        </div>
        <div
          className="tab-pane"
          id="past"
          role="tabpanel"
          aria-labelledby="past"
        >
          <section id="hi" className="section-spacer bg-very__gray">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="feature-list-image">
                    <img
                      className="card-img-top"
                      src={null}
                      alt="Tech Workshop"
                    />
                    <iframe
                      data-urllink="https://docs.google.com/presentation/d/e/2PACX-1vSubYcbqWaNFgVUDQ14VYLf_4RFiaVeFl-Tz6ryS_YAuYmP9xhdAUrV0_V5GpeHHenACAIwl8zwTZ3z/embed?start=false&loop=true&delayms=3000"
                      frameBorder="0"
                      width="480"
                      height="299"
                      allowFullScreen
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                    ></iframe>
                  </div>
                </div>
                <div className="col-sm-5 ml-auto">
                  <div className="feature-list-wrapper">
                    <div className="content-header">
                      <h2 className="content-title">Tech Workshop</h2>
                      <hr />
                      <h6>TIME : 10:00 AM - 02:00 PM (Weekly)</h6>
                      <h6>VENUE : TechHub EKSU</h6>
                      <p>We learnt web and android development</p>
                    </div>
                    <a href="#" className="past-event" rel="noopener">
                      EVENT PHOTOS&nbsp;&nbsp;<i className="fas fa-camera"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-spacer">
            <div className="container">
              <div className="row flex-column-reverse flex-sm-row align-items-cengit ter">
                <div className="col-sm-5 mr-auto">
                  <div className="feature-list-wrapper">
                    <div className="content-header">
                      <h2 className="content-title">DSC SSA Leads Summit</h2>
                      <hr />
                      <h6>
                        DATE : 25<sup>th</sup> July - 28<sup>th</sup>July 2018
                      </h6>
                      <h6>WHERE : Lagos, Nigeria.</h6>
                      <p>
                        One of our lead organizers was privileged to represent
                        the community in a lead summit hosted by Google Nigeria
                        where he also talked about goal-setting.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-list-image">
                    <iframe
                      width="500"
                      height="274"
                      data-urllink="https://www.youtube.com/embed/AAin71VkbzQ"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
)

export default Workshops
