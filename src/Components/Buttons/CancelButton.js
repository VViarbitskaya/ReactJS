import React from 'react';

import { IoMdClose } from 'react-icons/io';

import './CancelButton.css';

const CancelButton = ({ cancelHandler }) => {
  return <IoMdClose className="cancel-button" onClick={cancelHandler} />;
};

export default CancelButton;
