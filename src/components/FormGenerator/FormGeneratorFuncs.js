

export const getLayout = (formSpec) => {
    if(!formSpec) return {}

    return Object.keys(formSpec).reduce((acc, key) => {
        const item = formSpec[key]
        acc.rows = item.row > acc.rows ? item.row : acc.rows
        acc.columns = item.column > acc.columns ? item.column : acc.columns
        return acc
    }, {rows:0, columns:0})
}