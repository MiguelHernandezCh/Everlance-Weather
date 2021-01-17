import React from "react";
import "./weather-detail.styles.less"
import {WeatherTypesConfig} from "../../constants/weather-types";
import {formatTemp} from "../../utils/temperature.utils";
import {SizeClassConfig} from "./weather-detail.resources";

interface Props {
    temp: any,
    tempType: string,
    showImage?: boolean,
    size?: any
}

const WeatherDetail: React.FC<Props> = ({temp, tempType, showImage, size}) => {
    const {imgUrl, name} = WeatherTypesConfig[tempType] || {}
    const sizeClass = SizeClassConfig[size] || SizeClassConfig.default

    return (
        <section className={`WeatherDetail__Container ${sizeClass}`}>
            <div id="Weather-Temp">
                {formatTemp(temp)}
            </div>
            {showImage && (
                <div>
                    <img src={imgUrl} alt="Weather Icon" id="Weather-Image"/>
                </div>
            )}
            <div id="Weather-Name">
                {name}
            </div>
        </section>
    )
};

export default WeatherDetail;