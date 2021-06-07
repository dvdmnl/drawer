import React, {useEffect} from 'react'
import { getLayout } from './FormGeneratorFuncs'
import styles from '../../styles.module.css'

const TextInput = ({label, option, type}) => {
    return(
        <div><label>{label}</label><input placeholder={option[0]}/></div>
    )
}

const Select = ({label, option, type}) =>{
    return(
        <div>
            <label>{label}</label>
            <select>
                {option.map((item, index) => {
                    return(
                        <option key={index}>{item}</option>
                    )
                })}
            </select>
        </div>
    )
}

const renderComp = (componentToRender) => {
    switch (componentToRender.type) {
        case 'TEXT_INPUT':
            return <TextInput {...componentToRender} />;
        case 'SELECT':
            return <Select {...componentToRender} />;
        default:
            return <div/>
    }
}

const Row = ({columns,rowNumber, formSpec}) => {
    const arrColumns = [...Array(columns)]
    return(
        <div className={styles.row}>
            {arrColumns && arrColumns.map((item, index) => {

                const formSpecKey = `${rowNumber}-${index + 1}`;
                return !(formSpec && formSpec[formSpecKey]) ?
                 <div className={styles.column} key={index}>{`${rowNumber} - ${index + 1}`}</div> :
                    renderComp(formSpec[formSpecKey].component)
            })}
        </div>
    )
}

const FormGenerator = ({formSpec}) => {
    const {rows, columns} = getLayout(formSpec)
    const rowsArr = [...Array(rows)]

    return(
        <div>
            {rowsArr && rowsArr.map((item,index) => {
                return <Row formSpec={formSpec} key={index} rowNumber={index + 1} columns={columns}/>
            })}
        </div>
    )
}

export default FormGenerator