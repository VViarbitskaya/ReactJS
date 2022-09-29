import React from "react";

const CardBodyEditable = (props) => {

    return (
        <div>
            <div className="card-body">
                <input
                    placeholder="Enter New Body"
                    type="text"
                    size="15"
                    onChange={props.getBody}
                />
            </div>
        </div>
    );
};

export default CardBodyEditable;