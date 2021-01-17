import React, {useEffect, useState} from "react";
import {Button, Modal, Result} from "antd";
import {Typography} from 'antd';
import WeatherDetail from "../../weather-detail/weather-detail.component";
import {WeatherDetailSize} from "../../weather-detail/weather-detail.resources";
import DayList from "../../days-list/day-list.component";
import ExtraDetails from "./extra-details/extra-details.component";
import {LoadingOutlined} from "@ant-design/icons/lib";
import {getLocationData} from "../../../services/weather.service";

const {Title} = Typography;

interface Props {
    locationId: any,
    locationName: string,
    onClose: any
}

const DetailModal: React.FC<Props> = ({locationId, locationName, onClose}) => {
    const [location, setLocation]: any = useState(null);
    const [hasError, setHasError]: any = useState(false);

    const renderLoading = () => {
        if ((locationId && location) || hasError ) return null;
        return (
            <div className="DetailModal__Body">
                <LoadingOutlined className="DetailModal__Spinner"/>
            </div>
        )
    }
    const renderError = () => {
        if (!hasError) return null;
        return (
            <Result
                status="error"
                title="Can't reach location data"
                subTitle="Sadly we couldn't get access to the location data, please try again later."
            />
        )
    }

    const renderDetails = () => {
        if(!locationId || !location) return null;
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

    const getLocation = async () => {
        try {
            const location = await getLocationData(locationId)
            console.log(location);
            setLocation(location)
            setHasError(false)
        } catch (e) {
            console.log("Error");
            setHasError(true)
        }

    }

    useEffect(() => {
        if (!locationId) return;
        getLocation();

    }, [getLocation, locationId])

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
            {renderDetails()}
            {renderLoading()}
            {renderError()}
        </Modal>
    )
};

export default DetailModal