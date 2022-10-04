import React, { useState } from 'react';

import './CardStyles.css';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardHeaderEditable from './CardHeaderEditable';
import CardBodyEditable from './CardBodyEditable';

const Card = ({ content, save }) => {
  const [isEdit, setEdit] = useState(false);
  const [header, setHeader] = useState(content.header);
  const [body, setBody] = useState(content.body);
  const [isActive, setActive] = useState(true);

  const toggleHandler = () => setActive(!isActive);

  const editHandler = () => setEdit(!isEdit);

  const saveHeader = event => setHeader(event.target.value);

  const saveBody = event => setBody(event.target.value);

  const saveHandler = event => {
    event.preventDefault();
    setEdit(false);
    save({
      ...content,
      header,
      body,
    });
  };

  const cancelHandler = event => {
    event.preventDefault();
    setEdit(false);
    setHeader(content.header);
    setBody(content.body);
  };

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
          />
          <CardBody
            body={body}
            editHandler={editHandler}
            toggleHandler={toggleHandler}
            isActive={isActive}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
