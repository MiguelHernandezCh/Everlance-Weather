import React from "react";
import "../day-list.styles.less"
import {getDateName} from "../../../utils/date.utils";
import {WeatherTypesConfig} from "../../../constants/weather-types";
import {FallOutlined, RiseOutlined} from "@ant-design/icons/lib";

interface Props {
    minTemp: any,
    maxTemp: any,
    date: string,
    stateType: string
}

const DayDetail: React.FC<Props> = ({date, stateType, minTemp, maxTemp}) => {
    const {imgUrl} = WeatherTypesConfig[stateType]

    const formatTemp = (newTemp: number) => {
        return `${parseInt(newTemp.toString(), 10)} º`
    }

    return (
        <div className="DayDetail__Container">
            <div>
                {getDateName(date)}
            </div>
            <div>
                <img src={imgUrl} alt=""/>
            </div>
            <div className="DayDetail__TempVariance">
                <span>
                    <FallOutlined/>
                    {formatTemp(minTemp)}
                </span>
                <span>
                    <RiseOutlined/>
                    {formatTemp(maxTemp)}
                </span>
            </div>
        </div>
    )
}

export default DayDetail;