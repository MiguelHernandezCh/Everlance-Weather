export const getConfigOption = () => {
    const savedValue: any = localStorage.getItem("useLocalData");
    return savedValue === "true";
}

export const setConfigOption = (shouldUseLocalData: any) => {
    localStorage.setItem("useLocalData", shouldUseLocalData);
}