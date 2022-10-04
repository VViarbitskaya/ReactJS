import React from 'react';

import './CardStyles.css';

import SaveButton from '../Buttons/SaveButton';
import CancelButton from '../Buttons/CancelButton';

const CardHeaderEditable = ({ saveHandler, saveHeader, cancelHandler }) => {
  return (
    <div>
      <form className="card-header" onSubmit={saveHandler}>
        <input
          placeholder="Enter New Header"
          type="text"
          size="15"
          onChange={saveHeader}
        />
        <CancelButton cancelHandler={cancelHandler} />
        <SaveButton />
      </form>
    </div>
  );
};

export default CardHeaderEditable;
