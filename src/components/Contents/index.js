import React from 'react';
import './contents.css';
import contentsText from './constants';

const Contents = ({ contents }) => (
  <div>
    {contents.map(content => (
      <div
        key={`contents-${content.text}`}
        className="contents"
        dangerouslySetInnerHTML={{ __html: content.text }}
      />
    ))}
  </div>
);

Contents.defaultProps = {
  contents: contentsText,
};

export default Contents;
