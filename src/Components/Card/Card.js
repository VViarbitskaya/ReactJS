import React, { useState } from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import './CardStyles.css';
import CardHeaderEditable from "./CardHeaderEditable";
import CardBodyEditable from "./CardBodyEditable";

const Card = (props) => {

    const [isEdit, setEdit] = useState(false);
    const [header, setHeader] = useState(props.content.header);
    const [body, setBody] = useState(props.content.body);
    const [save, setSave] = useState(false);

    const editHandler = () => {
        setEdit(!isEdit);
        setSave(false);
    };

    const getHeader = (event) => {
        setHeader(event.target.value);
        setSave(false);
    };

    const getBody = (event) => {
        setBody(event.target.value);
        setSave(false);
    };

    const saveHandler = (event) => {
        event.preventDefault();
        setSave(true);
        setEdit(false);
        console.log(save);
        props.save({
            ...props.content,
            header,
            body
        });
    };

    const cancelHandler = (event) => {
        event.preventDefault();
        setEdit(false);
        setSave(false);
        setHeader(props.content.header);
        setBody(props.content.body);
    };

    return (
        <div className="card-frame">
            {isEdit ?
                <div>
                    <CardHeaderEditable cancelHandler={cancelHandler} saveHandler={saveHandler} getHeader={getHeader} />
                    <CardBodyEditable cancelHandler={cancelHandler} saveHandler={saveHandler} getBody={getBody} /> 
                </div>
                
            :
                <div>
                    <CardHeader header={header} editHandler={editHandler} /> 
                    <CardBody body={body} editHandler={editHandler} />
                </div>
            }  
        </div>
    );
};

export default Card;