import React, {useEffect, useState} from 'react';
import "./location.styles.less"
import {Button, Card, Col, Row, Skeleton, Typography} from "antd";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {ColOrder} from "./location.resources";
import {getLocationData, searchByCoords} from "../../services/weather.service";

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

    const [currentLocation, setCurrentLocation]: any = useState({});


    const {geolocation} = navigator;
    const {first, second} = ColOrder;
    const {sm, md} = useBreakpoint();
    const hasSmallScreen = sm && !md;

    const columnsOrder = {
        dayList: hasSmallScreen ? second : first,
        measurement: hasSmallScreen ? first : second,
    };

    const getLocation = () => {
        const onSuccess = async (position: any) => {
            const {latitude, longitude} = position.coords;
            console.log(latitude, longitude)
            try {
                const {data} = await searchByCoords(latitude, longitude)
                if (!data.length) return;
                const firstLocation = data[0];
                const location = await getLocationData(firstLocation.woeid)
                setCurrentLocation(location.data)
            } catch (e) {
                console.log("Error");
            }

        }

        const onError = () => {
            console.log("ERROR")
        }

        return geolocation ? geolocation.getCurrentPosition(onSuccess, onError, GeolocationOptions) : onError()
    }

    console.log("currentLocation", currentLocation);

    const getLocationName = () => {
        return `${currentLocation.title} ${currentLocation.parent?.title}`
    }


    useEffect(() => {
        getLocation()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="Location__Container">
            <Card className="Location__Card" title="Your location">
                <Skeleton loading={!currentLocation.title}>
                    <Title level={2}>{getLocationName()}</Title>
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                        <Col className="gutter-row" xs={24} md={20} lg={20} order={columnsOrder.dayList}>
                            <div>days</div>
                            <Button onClick={getLocation}> aaaaa</Button>
                        </Col>
                        <Col className="gutter-row" xs={24} md={4} lg={4} order={columnsOrder.measurement}>
                            <div>TEMP</div>
                        </Col>
                    </Row>
                </Skeleton>

            </Card>
        </div>
    );
};

export default Location;