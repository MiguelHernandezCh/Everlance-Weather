import axios from "axios";

const service = axios.create({
    baseURL: "https://www.metaweather.com/api",
    headers: {"Access-Control-Allow-Origin": "*"}
})

export const searchByName = (query: string) => {
    return service.get(`/location/search/?query=${query}`);
}

export const searchByCoords = (lat: number, lng: number) => {
    return service.get(`/location/search/?lattlong=${lat},${lng}`);
}

export const getLocationData = (id:number) => {
    return service.get(`/location/${id}`);
}