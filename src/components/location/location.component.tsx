import React, {useEffect, useState} from 'react';
import "./location.styles.less"
import {Card, Col, Result, Row, Skeleton, Typography} from "antd";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {ColOrder} from "./location.resources";
import DayList from "../days-list/day-list.component";
import WeatherDetail from "../weather-detail/weather-detail.component";
import {getLocationData, searchByCoords} from "../../services/weather.service";
import {useTranslation} from "react-i18next";
import {getConfigOption} from "../../utils/config.utils";
import {getMockLocationData} from "../../services/mock.service";

const {Title} = Typography;

interface Props {
    name?: string;
}

const GeolocationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

const Location: React.FC<Props> = () => {
    const {t} = useTranslation();
    const [currentLocation, setCurrentLocation]: any = useState({});
    const [isLoading, setLoading]: any = useState(true);
    const [hasError, setHasError]: any = useState(false);

    const {title, parent, consolidated_weather} = currentLocation || {};
    const todayWeatherInfo = consolidated_weather ? consolidated_weather[0] : {};
    const {geolocation} = navigator;
    const {first, second} = ColOrder;
    const {xs, sm, md} = useBreakpoint();
    const hasSmallScreen = (xs || sm) && !md;

    const columnsOrder = {
        dayList: hasSmallScreen ? second : first,
        measurement: hasSmallScreen ? first : second,
    };

    const getLocation = () => {
        const shouldUseLocalData = getConfigOption();
        if (shouldUseLocalData) {
            setCurrentLocation(getMockLocationData())
            setLoading(false)
            return;
        }

        const onSuccess = async (position: any) => {
            const {latitude, longitude} = position.coords;
            setLoading(true)
            try {
                const {data} = await searchByCoords(latitude, longitude)
                if (!data.length) {
                    setHasError(true)
                    return;
                }
                const firstLocation = data[0];
                const location = await getLocationData(firstLocation.woeid)
                setCurrentLocation(location)
                setLoading(false)
            } catch (e) {
                setLoading(false)
                setHasError(true)
            }
        }

        const onError = () => {
            setLoading(false)
            setHasError(true)
        }

        return geolocation ? geolocation.getCurrentPosition(onSuccess, onError, GeolocationOptions) : onError()
    }

    const getLocationName = () => {
        return `${title}, ${parent?.title}`
    }

    const renderError = () => {
        return (
            <Result
                status="error"
                title={t("location.error-title")}
                subTitle={t("location.error-subtitle")}
            />
        )
    }

    useEffect(() => {
        getLocation()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="Location__Container">
            <Card className="Location__Card" title={t("location.title")}>
                {hasError ? renderError() : (
                    <Skeleton loading={isLoading} active>
                        <Title level={2}>{getLocationName()}</Title>
                        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                            <Col xs={24} md={19} lg={19} order={columnsOrder.dayList}>
                                <DayList days={consolidated_weather}/>
                            </Col>
                            <Col xs={24} md={5} lg={5} order={columnsOrder.measurement}>
                                <div className="WeatherDetail__Container--center">
                                    <WeatherDetail temp={todayWeatherInfo.the_temp} tempType={todayWeatherInfo.weather_state_abbr}/>
                                </div>
                            </Col>
                        </Row>
                    </Skeleton>
                )}

            </Card>
        </div>
    );
};

export default Location;