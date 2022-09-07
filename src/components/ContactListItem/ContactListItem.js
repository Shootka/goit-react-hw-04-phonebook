import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onClick }) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center', alignContent: 'center', gap: 10, height: 75 }}>
      <p>{name} {number}</p>
      <button id={id} style={{ height: 20 }} onClick={onClick}>delete</button>
    </li>
  );

};

ContactListItem.propTypes = {
  id: PropTypes.string || PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};

export default ContactListItem;
