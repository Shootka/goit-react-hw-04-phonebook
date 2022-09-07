import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

const Filter = ({onChange}) => {
  const wrote = (event) => {
    onChange(event.target.value);
  };
  return (
    <div>
      <span style={{ fontSize: 20 }}>Find contact by name </span>
      <Input onChange={wrote} />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
