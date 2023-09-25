import React, { Component } from 'react';

class Footer extends Component {
  render() {

    // if(this.props.data){
    //   var networks= this.props.data.social.map(function(network){
    //     return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    //   })
    // }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
            <li key="medium">
              <a href="https://medium.com/@eellaup">
                  <i className="fab fa-medium"></i>
              </a>
            </li>

            <li key="linkedin">
              <a href="https://www.linkedin.com/in/eellaup/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>

            <li key="github">
              <a href="https://www.github.com/Eellaup">
                <i className="fab fa-github"></i>
              </a>
            </li>
           </ul>

           {/* <ul className="copyright">
               <li>&copy; Copyright 2017 Tim Baker</li> 
           </ul> */}

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
