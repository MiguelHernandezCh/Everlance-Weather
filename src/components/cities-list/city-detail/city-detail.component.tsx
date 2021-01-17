import {Button, Col, List, Row} from "antd";
import React from "react";
import "../cities-list.styles.less"
import {EnvironmentOutlined, RightOutlined} from "@ant-design/icons/lib";

interface Props {
    title: string,
    onClick: any
}

const CityDetail: React.FC<Props> = ({title, onClick}) => {
    return (
        <List.Item>
            <Row gutter={{xs: 24, sm: 24, md: 24, lg: 32}}>
                <Col xs={24} sm={18} md={20} lg={20}>
                    <List.Item.Meta
                        avatar={<EnvironmentOutlined/>}
                        title={title}
                    />
                </Col>
                <Col xs={24} sm={6} md={4} lg={4} className="CityItem__ButtonColumn">
                    <Button type="primary" shape="round" onClick={onClick}>
                        Details
                        <RightOutlined/>
                    </Button>
                </Col>
            </Row>
        </List.Item>
    )
};

export default CityDetail