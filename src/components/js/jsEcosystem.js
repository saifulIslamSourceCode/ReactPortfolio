import React from 'react';
import './jsEcosystem.css';

const logos = [
  { name: 'JavaScript', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'TypeScript', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
   { name: 'Angular', src: 'https://brandlogos.net/wp-content/uploads/2025/04/angular-logo_brandlogos.net_beb6k.png' },
  { name: 'Node.js', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Express', src: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
];

const JsLogoMarquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {[...logos, ...logos].map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.name} className="logo" />
        ))}
      </div>
    </div>
  );
};

export default JsLogoMarquee;
