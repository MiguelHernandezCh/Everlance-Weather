export const formatTemp = (temp: number) => {
    if (isNaN(temp) && !temp) return null;
    return `${parseInt(temp.toString(), 10)} º`
}