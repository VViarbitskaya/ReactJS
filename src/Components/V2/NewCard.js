import React, { useState } from "react";
import './NewCard.css';
import './Buttons/EditButton.css';
import CheckBox from "./Buttons/CheckBox";
import EditButton from "./Buttons/EditButton";
import SaveButton from "./Buttons/SaveButton";
import CancelButton from "./Buttons/CancelButton";


const NewCard = (props) => {

    const [isActive, setActive] = useState(true);
    const [isEdit, setEdit] = useState(false);
    const [header, setHeader] = useState(props.items[0].header);
    const [body, setBody] = useState(props.items[0].body);
    const [save, setSave] = useState(false);


    const handleToggle = () => {
        setActive(!isActive);
    };

    const editHandler = () => {
        setEdit(!isEdit);
        setActive(true);
        setSave(false);
        console.log(isEdit);
    };

    const getData = (event) => {
        setHeader(event.target.value);
        setBody(event.target.value);
        setSave(false);
    };

    const saveHandler = (event) => {
        event.preventDefault();
        setSave(true);
        setEdit(false);
        console.log(save);
    };

    const cancelHandler = () => {
        setEdit(false);
        setActive(true);
        setSave(false);
        setHeader(props.items[0].header);
        setBody(props.items[0].body);
    };

    return (
        <div>
            {isEdit ?
                <div>
                    <div>
                        {save
                            ?
                            <div>

                                <div className='card-header'>
                                    {header}
                                    <CheckBox handleToggle={handleToggle} />
                                    <EditButton className="edit-button" editHandler={editHandler} />
                                </div>
                                <div className="card-body">
                                    {body}
                                </div>

                            </div>
                            :
                            <form className="card-frame" onSubmit={saveHandler}>
                                <div className='card-header'>
                                    <input
                                        placeholder="Enter New Header"
                                        type="text"
                                        size="15"
                                        onChange={getData}
                                    />
                                    <SaveButton />
                                    <CancelButton cancelHandler={cancelHandler} />
                                </div>
                                <div className="card-body">
                                    <input
                                        placeholder="Enter New Body"
                                        type="text"
                                        size="15"
                                        onChange={getData}
                                    />
                                </div>

                            </form>
                        }
                    </div>
                </div>

                :
                <div className="card-frame">

                    <div className={isActive ? 'card-header' : 'card-header-checked'}>
                        {header}
                        <CheckBox handleToggle={handleToggle} />
                        <EditButton editHandler={editHandler} />
                    </div>
                    <div className="card-body">
                        {body}
                    </div>

                </div>
            }
        </div>
    );
};

export default NewCard;