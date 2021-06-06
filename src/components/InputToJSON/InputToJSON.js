import React, {useState, useEffect, useRef} from 'react'
import {convertTextToArr} from './InputToJSONfuncs'

const InputToJSON = ({setFormData}) => {
    const refContainer = useRef(null);

    const handleSubmit = () => {
        const inputText = refContainer.current.value
        const inputToArr = inputText && inputText !== '' ? convertTextToArr(inputText) : []
        setFormData(inputToArr);
    }

    return (
        <div>
            <textarea ref={refContainer} name="myText" type="textarea"/>
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>

    )
}

export default InputToJSON