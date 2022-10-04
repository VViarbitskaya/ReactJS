import React from 'react';

const CardBodyEditable = ({ saveBody }) => {
  return (
    <div>
      <div className="card-body">
        <input
          placeholder="Enter New Body"
          type="text"
          size="15"
          onChange={saveBody}
        />
      </div>
    </div>
  );
};

export default CardBodyEditable;
