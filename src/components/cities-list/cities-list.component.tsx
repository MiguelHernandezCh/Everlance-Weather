import React, {useState} from "react";
import "./cities-list.styles.less"
import {List, Result} from "antd";
import {LoadingOutlined} from "@ant-design/icons/lib";
import {Typography} from 'antd';
import CityDetail from "./city-detail/city-detail.component";
import DetailModal from "./detail-modal/detail-modal.component";
import {useTranslation} from "react-i18next";

const {Title} = Typography;

interface Props {
    cities: any[],
    isLoading: boolean
}

const CitiesList: React.FC<Props> = ({cities, isLoading}) => {
    const {t} = useTranslation();
    const [selectedLocation, setSelectedLocation]: any = useState(null);

    const handleModalClose = () => {
        setSelectedLocation(null)
    }
    const renderEmptyState = () => {
        if (cities?.length || isLoading) return null;
        return (
            <Result
                status="404"
                title={t("cities.error-title")}
                subTitle={t("cities.error-subtitle")}
            />
        )
    }

    const renderCitiesList = () => {
        if (!cities?.length || isLoading) return null;

        const handleItemClick = (item: any) => {
            setSelectedLocation(item)
        }

        return (
            <div className="CitiesList__Container--height">
                <div className="CitiesList__Results">
                    <Title level={3}>{t("cities.title")}</Title>
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


    const renderModal = () => {
        if (!selectedLocation?.woeid) return null;
        return <DetailModal onClose={handleModalClose} locationId={selectedLocation?.woeid} locationName={selectedLocation?.title}/>
    }

    return (
        <section className="CitiesList__Container">
            {renderLoading()}
            {renderEmptyState()}
            {renderCitiesList()}
            {renderModal()}
        </section>
    )
};

export default CitiesList