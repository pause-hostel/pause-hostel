import React from 'react';
import './contents.css';
import { contentsText } from './constants';

const Contents = ({ contents }) => {
  return (
    <div>
      {contents.map(content => (
        <div
          className="contents"
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
      ))}
    </div>
  );
};

Contents.defaultProps = {
  contents: contentsText
};

export default Contents;
