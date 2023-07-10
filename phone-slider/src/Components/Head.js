import React from 'react';
import ReactDOM  from 'react-dom';

const headRoot = document.head;

const Head = (props) => {
  return (
     ReactDOM.createPortal(props.children, headRoot)
  )
};

export default Head;