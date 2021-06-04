

export const getLayout = (formSpec) => {
    if(!formSpec) return {}

    return formSpec.reduce((acc, item) => {
        acc.rows = item.row > acc.rows ? item.row : acc.rows
        acc.columns = item.column > acc.columns ? item.column : acc.columns
        return acc
    }, {rows:0, columns:0})
}