import React, {useState, useEffect, useRef} from 'react'
import {convertTextToArr} from './InputToJSONfuncs'

const InputToJSON = ({setFormData}) => {
    const refContainer = useRef(null);

    const handleSubmit = () => {
        const inputText = '2;1;gender;SELECT;Male,Female\n' +
            '1;1;First Name;TEXT_INPUT;Enter your first name\n' +
            '2;2;marital status;SELECT;Single,Maried,Divorced\n' +
            '1;2;Last Name;TEXT_INPUT;Enter your last name'
        const inputToArr = convertTextToArr(inputText)
        setFormData(inputToArr);
    }

    return (
        <div>
            <input ref={refContainer} name="myText" type="textarea"/>
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>

    )
}

export default InputToJSON