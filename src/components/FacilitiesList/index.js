import React from 'react';
import './facilitiesList.css';
import ListWrapper from '../List/ListWrapper';
import facilitesListContents from './constants';

const FacilitiesList = () => (
  <div>
    <ul className="facilities-list">
      <ListWrapper items={facilitesListContents} />
    </ul>
  </div>
);

FacilitiesList.defaultProps = {
  contents: facilitesListContents,
};

export default FacilitiesList;
