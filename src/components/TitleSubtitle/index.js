import React from 'react';
import './titlesubtitle.css';
import titleSubtitleContents from './constants';

const TitleSubtitle = ({ contents }) => (
  <div className="title-container">
    {contents.map(content => (
      <div key={`titielSub-${content.heading}`}>
        <div className="section-heading">{content.heading}</div>
        <div className="section-subheading">{content.subHeading}</div>
      </div>
    ))}
  </div>
);

TitleSubtitle.defaultProps = {
  contents: titleSubtitleContents,
};

export default TitleSubtitle;
