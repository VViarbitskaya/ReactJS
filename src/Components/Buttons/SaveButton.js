import React from 'react';

import { IoMdCheckmark } from 'react-icons/io';

import './SaveButton.css';

const SaveButton = () => {
  return (
    <button type="submit" className="save-button">
      <IoMdCheckmark />
    </button>
  );
};

export default SaveButton;
