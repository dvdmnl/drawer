

export const convertTextToArr = (inputText) => {
    const inputByRows = inputText.split('\n')
    return inputByRows.map((inputByRow) => {
        const fieldData = inputByRow.split(';')
        const fieldDataObject = {
            row: Number(fieldData[0]),
            column: Number(fieldData[1]),
            label: fieldData[2],
            type: fieldData[3],
            option: fieldData[3] === 'SELECT' ? fieldData[4].split(',') : [fieldData[4]]
        }

        return fieldDataObject
    })

}