export const removeDecimals = (temp: number) => {
    if (isNaN(temp) && !temp) return null;
    return parseInt(temp.toString(), 10)
}