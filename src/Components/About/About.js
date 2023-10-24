import React, { Component } from 'react';
import aboutData from './aboutData';
import { HeaderNav } from '../Header';

class Portfolio extends Component {
  render() {

    const aboutme = aboutData.aboutme.map(function(item) {
      return (
        <div>
          <p>
            {item}
          </p>
        </div> 
      );
    });

    const why_meche = aboutData.why_meche.map(function(item) {
      return (
        <div>
          <p>
            {item}
          </p>
        </div> 
      );
    });

    const why_cs = aboutData.why_cs.map(function(item) {
      return (
        <div>
          <p>
            {item}
          </p>
        </div> 
      );
    });

    const interests = aboutData.interests.map(function(int) {
      return (
        <li>
          <p>
            &#8226; {int}
          </p>
        </li>
      );
    });

    return (
      
      <section id="about">
        <div id="home"></div>

        {/* Nav Bar */}
        <HeaderNav
          navClassName="compNav"
          about={ true }
          frontpageHandler={ this.props.frontpageHandler }
          aboutHandler={ this.props.aboutHandler }
          resumeHandler={ this.props.resumeHandler }
          projectHandler={ this.props.projectHandler }
        />

        <div className="row">
          <div className="column">
            <p>
              <img className="portrait" src="/images/aboutme.jpg" />
              <h1>About Me</h1>
              {aboutme}
            </p>
          </div>
          {/* <img src="/images/laying_on_tree.jpg" /> */}
        </div>

        <br/>

        <div className="row">
          <div className="column">
            <div className="course-container">
              <h1>Interests</h1>
              <ul className="course-list">
                {interests}
              </ul>
            </div>
          </div>

        </div>

        {/* <div className="row">
          <div className="column">
            <h1>Interests?</h1>

            <p>
              <img className="interest-img" src="/images/tennis.jpg"/>
              <img className="interest-img" src="/images/tennis.jpg"/>
              <img className="interest-img" src="/images/tennis.jpg"/>
              <ul>
                {interests}
              </ul>
            </p>
          </div>
        </div> */}

      </section>
    
    );
  }
}

export default Portfolio;
