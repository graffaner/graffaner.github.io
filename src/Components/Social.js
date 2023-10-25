import React from 'react';

function Medium(props) {
  return (
    <li key="medium">
      <a href="https://medium.com/@graffaner">
        <i className="fab fa-medium"></i>
      </a>
    </li>
  );
}

function Linkedin(props) {
  return (
    <li key="linkedin">
      <a href="https://www.linkedin.com/in/lei-chen-820a953b/">
        <i className="fab fa-linkedin"></i>
      </a>
    </li>
  );
}

function Github(props) {
  return (
    <li key="github">
      <a href="https://github.com/graffaner/">
        <i className="fab fa-github"></i>
      </a>
    </li>
  );
}

export { Medium, Linkedin, Github };
