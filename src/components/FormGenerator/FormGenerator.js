import React, {useEffect} from 'react'
import { getLayout } from './FormGeneratorFuncs'


const FormGenerator = ({formSpec}) => {
    const {rows, columns} = getLayout(formSpec)

    const renderLayout = () => {
        let elements = []
        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= columns; j++) {
                elements.push({row: i, column: j})
            }
        }

        console.log('elements', elements)
        return ""
    }

    return(
        <div>
            {renderLayout()}
        </div>
    )
}

export default FormGenerator