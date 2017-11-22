import React from 'react';
import { pawImage } from '../../images';
import './divider.css';

const Divider = () => (
  <div className="divider">
    <div className="hr" />
    <img className="paw-icon" src={pawImage} alt="divider" />
    <div className="hr" />
  </div>
);

export default Divider;
