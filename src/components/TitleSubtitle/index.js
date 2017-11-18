import React from 'react';
import './titlesubtitle.css';
import { titleSubtitleContents } from './constants';

const TitleSubtitle = ({ contents }) => {
  return (
    <div className="title-container">
      {contents.map(content => (
        <div>
          <div className="section-heading">{content.heading}</div>
          <div className="section-subheading">{content.subHeading}</div>
        </div>
      ))}
    </div>
  );
};

TitleSubtitle.defaultProps = {
  contents: titleSubtitleContents
};

export default TitleSubtitle;
