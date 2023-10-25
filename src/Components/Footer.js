import React, { Component } from 'react';
import { Medium, Linkedin, Github } from './Social';

class Footer extends Component {
  render() {
    const today = new Date();
    const thisYear = today.getFullYear();

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {/* <Medium/> */}
              <Linkedin/>
              <Github/>
            </ul>

            <ul className="copyright">
                <li>&copy; Copyright {thisYear} Lei Chen</li> 
            </ul>

          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
