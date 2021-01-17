import React from "react";
import "./cities-list.styles.less"
import {List, Result} from "antd";
import {LoadingOutlined} from "@ant-design/icons/lib";
import {Typography} from 'antd';
import CityDetail from "./city-detail/city-detail.component";

const {Title} = Typography;

interface Props {
    cities: any[],
    isLoading: boolean
}

const CitiesList: React.FC<Props> = ({cities, isLoading}) => {

    const renderEmptyState = () => {
        if (cities?.length || isLoading) return null;
        return (
            <Result
                status="404"
                title="No results yet!"
                subTitle="Please use the search box above"
            />
        )
    }

    const renderCitiesList = () => {
        if (!cities?.length || isLoading) return null;

        const handleItemClick = (item: any) => {
            console.log(item);
        }

        return (
            <div className="CitiesList__Container--height">
                <div className="CitiesList__Results">
                    <Title level={3}>Cities</Title>
                    <List
                        itemLayout="horizontal"
                        dataSource={cities}
                        renderItem={(item: any) => <CityDetail key={item.latt_long} title={item.title} onClick={() => handleItemClick(item)}/>}
                    />
                </div>
            </div>
        )
    }
    const renderLoading = () => {
        if (!isLoading) return null;
        return (
            <div className="CitiesList__Container--height CitiesList__Container--center">
                <LoadingOutlined/>
            </div>
        )
    }


    return (
        <section className="CitiesList__Container">
            {renderLoading()}
            {renderEmptyState()}
            {renderCitiesList()}
        </section>
    )
};

export default CitiesList