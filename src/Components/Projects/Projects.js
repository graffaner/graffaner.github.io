import React, { Component } from 'react';
import { HeaderNav } from '../Header';
import ProjectTabs from './ProjectTabs';

class Projects extends Component {
  render() {
    return (
      <section id="portfolio">
        <div id="home"></div>

        {/* Nav Bar */}
        <HeaderNav
          navClassName="compNav"
          project={ true }
          frontpageHandler={ this.props.frontpageHandler }
          aboutHandler={ this.props.aboutHandler }
          resumeHandler={ this.props.resumeHandler }
          projectHandler={ this.props.projectHandler }
        />

        <div className="row">
          <h1> Personal & Professional Fun </h1>
          <ProjectTabs/>
        </div>
      
      </section>
    );
  }
}

export default Projects;
