import React from 'react';

const IconBox = ({ href, icon, title }) => (
  <div className="icon-box text-center mb-5 mb-md-0">
    <a href={href}>
      <div className="icon icon-shape icon-lg bg-soft shadow-soft border border-light rounded-circle mb-3 btn-ungu">
        <span className={`fa ${icon}`}></span>
      </div>
    </a>
    <h2 className="h3 my-3"><a href={href}>{title}</a></h2>
  </div>
);

export default IconBox;
