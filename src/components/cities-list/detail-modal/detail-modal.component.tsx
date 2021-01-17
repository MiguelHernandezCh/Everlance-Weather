import React, {useEffect, useState} from "react";
import {Button, Modal} from "antd";
import {getLocationData} from "../../../services/mock.service";
import {Typography} from 'antd';
import WeatherDetail from "../../weather-detail/weather-detail.component";
import {WeatherDetailSize} from "../../weather-detail/weather-detail.resources";
import DayList from "../../days-list/day-list.component";
import ExtraDetails from "./extra-details/extra-details.component";
import {LoadingOutlined} from "@ant-design/icons/lib";

const {Title} = Typography;

interface Props {
    locationId: any,
    locationName: string,
    onClose: any
}

const DetailModal: React.FC<Props> = ({locationId, locationName, onClose}) => {
    const [location, setLocation]: any = useState(null);

    const renderLoading = () => {
        if (locationId && location) return null;
        return (
            <div className="DetailModal__Body">
                <LoadingOutlined className="DetailModal__Spinner"/>
            </div>
        )
    }

    const renderDetails = () => {
        const todayWeather = location?.consolidated_weather[0]
        const {the_temp, weather_state_abbr, min_temp, max_temp, wind_speed, humidity} = todayWeather;
        return (
            <div className="DetailModal__Body">
                <Title level={5}>Today</Title>
                <WeatherDetail
                    showImage
                    temp={the_temp}
                    tempType={weather_state_abbr}
                    size={WeatherDetailSize.large}
                />
                <ExtraDetails minTemp={min_temp} maxTemp={max_temp} wind={wind_speed} humidity={humidity}/>
                <DayList days={location?.consolidated_weather} forceMdSize/>
            </div>
        )
    }


    const handleClose = () => {
        setLocation(null);
        onClose()
    }

    useEffect(() => {
        if (!locationId) return;

        setTimeout(() => {
            setLocation(getLocationData())
        }, 2000)

    }, [locationId])

    return (
        <Modal
            title={<Title level={4}>{locationName}</Title>}
            visible={!!locationId}
            onOk={handleClose}
            onCancel={handleClose}
            className="DetailModal__Container"
            footer={[
                <Button key="back" onClick={handleClose}>
                    Close
                </Button>
            ]}>
            {locationId && location ? renderDetails() : renderLoading()}
        </Modal>
    )
};

export default DetailModal