import React from "react";
import {Col, Row} from 'antd';
import "../../cities-list.styles.less"
import {FallOutlined, RiseOutlined} from "@ant-design/icons/lib";
import {WeatherTypesConfig} from "../../../../constants/weather-types";
import {removeDecimals} from "../../../../utils/temperature.utils";

interface Props {
    minTemp: any,
    maxTemp: any,
    wind: any,
    humidity: any
}

const ExtraDetails: React.FC<Props> = ({minTemp, maxTemp, wind, humidity}) => {
    const {hc, lr} = WeatherTypesConfig;

    const Items = [
        {value: `${removeDecimals(minTemp)}º`, title: "Min", icon: <FallOutlined/>},
        {value: `${removeDecimals(maxTemp)}º`, title: "Max", icon: <RiseOutlined/>},
        {value: `${removeDecimals(wind)}Mph`, title: "Wind", icon: <img src={hc.imgUrl} alt="Wind"/>},
        {value: `${removeDecimals(humidity)}`, title: "Humidity", icon: <img src={lr.imgUrl} alt="Humidity"/>},
    ]
    return (
        <section>
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                {Items.map(({title, icon, value}) => {
                    return (
                        <Col xs={12} md={12} lg={6} key={title}>
                            <div className="DetailModal__ExtraDetail">
                                <span>{title}</span>
                                <br/>
                                <div>
                                    {icon} &nbsp; <span>{value}</span>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </section>
    )
};

export default ExtraDetails