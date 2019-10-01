import React from 'react';

const Input = (props) => {

  let inputChange = (event) => props.onChange(event);

  return (
    <input
      onChange={ inputChange }
      type={props.type}
      name={props.name}
      value={props.value}
      id={props.id}
      />
  );
};

export default Input;