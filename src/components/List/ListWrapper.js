import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const ListWrapper = ({ className, items }) => (
  <div className={className}>
    <ul>
      {items.map((item, index) => (
        <ListItem
          key={`item.text-${index}`}
          className={item.className}
          href={item.href}
          text={item.text}
        />
      ))}
    </ul>
  </div>
);
ListWrapper.defaultProps = {
  items: [],
};
ListWrapper.propTypes = {
  className: PropTypes.string, //eslint-disable-line
  items: PropTypes.array, //eslint-disable-line
};
export default ListWrapper;
