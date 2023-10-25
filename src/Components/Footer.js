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
                <li>Photo by <a href="https://unsplash.com/@anderrek?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ander Peña</a> on <a href="https://unsplash.com/photos/a-view-of-a-mountain-range-with-a-moon-in-the-sky-REAMd8gKbPc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </li>
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
