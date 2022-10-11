import React, { useState } from 'react';

import './CardStyles.css';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardHeaderEditable from './CardHeaderEditable';
import CardBodyEditable from './CardBodyEditable';

const Card = ({ content, isReadModeOn }) => {
  let [isEdit, setEdit] = useState(false);
  const [header, setHeader] = useState(content.header);
  const [body, setBody] = useState(content.body);
  let [isActive, setActive] = useState(true);
  const [card, setCardData] = useState(content);

  const toggleHandler = () => {
    isActive = !isActive;
    if (isReadModeOn) {
      isActive = true;
    }
    setActive(isActive);
  };

  const editHandler = () => {
    isEdit = !isEdit;
    if (isReadModeOn) {
      isEdit = false;
    }
    setEdit(isEdit);
  };

  const saveHeader = event => setHeader(event.target.value);

  const saveBody = event => setBody(event.target.value);

  const saveHandler = event => {
    event.preventDefault();
    setEdit(false);
    setCardData({
      ...card,
      header,
      body,
    });
  };

  const cancelHandler = event => {
    if (!isReadModeOn) {
      event.preventDefault();
    }
    setEdit(false);
    setHeader(card.header);
    setBody(card.body);
  };

  React.useEffect(() => {
    if (isReadModeOn) {
      toggleHandler();
      editHandler();
      cancelHandler();
    }
  });

  return (
    <div className="card-frame">
      {isEdit ? (
        <div>
          <CardHeaderEditable
            cancelHandler={cancelHandler}
            saveHandler={saveHandler}
            saveHeader={saveHeader}
          />
          <CardBodyEditable
            cancelHandler={cancelHandler}
            saveHandler={saveHandler}
            saveBody={saveBody}
          />
        </div>
      ) : (
        <div>
          <CardHeader
            header={header}
            editHandler={editHandler}
            toggleHandler={toggleHandler}
            isActive={isActive}
            isReadModeOn={isReadModeOn}
          />
          <CardBody
            body={body}
            editHandler={editHandler}
            toggleHandler={toggleHandler}
            isActive={isActive}
            isReadModeOn={isReadModeOn}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
