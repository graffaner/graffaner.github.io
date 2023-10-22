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
          {int}
        </li>
      );
    });

    return (
      
      <section id="about">

        <div>
          <HeaderNav
            frontpageHandler={ this.props.frontpageHandler }
            aboutHandler={ this.props.aboutHandler }
            resumeHandler={ this.props.resumeHandler }
            projectHandler={ this.props.projectHandler }
          />
        </div>

        <div id="home"></div>

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

        {/* <br/> */}

        {/*<div className="row">
          <div className="column">
            <h1>Why Software / Data Engineering?</h1>
            <p>
              {why_cs}
            </p>
          </div>
        </div> */}

        {/* <br/> */}

        {/* <div className="row">
          <div className="column">
            <h1>Why Mechanical Engineering?</h1>
            <p>
              {why_meche}
            </p>
          </div>
        </div> */}

        {/* <h1>Interests?</h1>

        <div className="interest-card">
          
        </div> */}

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
