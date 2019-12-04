import React from 'react';

const Message = (props) => {
  console.log(props);
  return (
    <div>{props.message}</div>
  );
};

export default Message;