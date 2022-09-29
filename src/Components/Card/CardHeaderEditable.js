import React from "react";
import SaveButton from "../Buttons/SaveButton";
import CancelButton from "../Buttons/CancelButton";
import './CardStyles.css';

const CardHeaderEditable = (props) => {

    return (
        <div>
            <form className="card-header" onSubmit={props.saveHandler} >
                <input
                    placeholder="Enter New Header"
                    type="text"
                    size="15"
                    onChange={props.getHeader}
                />
                <CancelButton cancelHandler={props.cancelHandler} />
                <SaveButton />
            </form>
        </div>
    );
};

export default CardHeaderEditable;