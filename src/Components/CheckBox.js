import React from 'react';

const MyCheckBox = ({handleToggle}) => {
    return <input type ="checkbox" color="default" onChange ={handleToggle}></input>
};
export default MyCheckBox;
