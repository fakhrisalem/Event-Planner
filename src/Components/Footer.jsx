import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <p>
          &copy; 2025 Event Planner Organization. All rights reserved. <br />
          Developed by{' '}
          <a
            href="https://github.com/fakhrisalem"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <i className="fab fa-github"></i> @fakhrisalem
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
