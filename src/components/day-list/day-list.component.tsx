import React from "react";
import {Col, Row} from "antd";
import DayDetail from "./day-detail/day-detail.component";
import "./day-list.styles.less"

interface Props {
    days: any[]
}

const DayList: React.FC<Props> = ({days}) => {
    return (
        <div className="DayList__Container">
            <Row gutter={{xs: 24, sm: 24, md: 24, lg: 32}}>
                {days && days.map(({min_temp, max_temp, applicable_date, weather_state_abbr}) => (
                    <Col key={`DayColumn-${applicable_date}`} xs={12} sm={8} md={8} lg={4}>
                        <DayDetail date={applicable_date} tempType={weather_state_abbr} minTemp={min_temp} maxTemp={max_temp}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default DayList;