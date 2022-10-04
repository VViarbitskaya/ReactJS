import React from 'react';

import { IoMdCreate } from 'react-icons/io';

import './EditButton.css';

const EditButton = ({ editHandler }) => {
  return <IoMdCreate className="edit-button" onClick={editHandler} />;
};

export default EditButton;
