import React, { useState } from "react";
import CheckBox from "../Buttons/CheckBox";
import EditButton from "../Buttons/EditButton";
import './CardStyles.css';
import '../Buttons/EditButton.css';


const CardHeader = (props) => {

    const [isActive, setActive] = useState(true);

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div>
            <div className={isActive ? 'card-header' : 'card-header-checked'}>
                {props.header}
                <EditButton className="edit-button" editHandler={props.editHandler}/>
                <CheckBox handleToggle={handleToggle} />
            </div>
        </div>
    );
};

export default CardHeader;