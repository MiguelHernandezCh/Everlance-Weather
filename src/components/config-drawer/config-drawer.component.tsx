import React from 'react';
import {Avatar, Divider, Drawer, List} from "antd";
import {LanguageItems, TemperatureMeasurementItems, WindSpeedItems} from "./config-drawer.resources";
import "./config-drawer.styles.less"
import {CheckOutlined} from '@ant-design/icons';
import {useTranslation} from "react-i18next";

interface Props {
    isVisible: boolean;
    onClose: any;
}

const ConfigDrawer: React.FC<Props> = ({isVisible, onClose}) => {
    const {t, i18n} = useTranslation();
    const renderList = (titleId: string, data: any[], handler: any) => {
        return (
            <section className="List__Container">
                <Divider orientation="center">{t(titleId)}</Divider>
                <List
                    dataSource={data}
                    renderItem={({label, img, isSelected, value}: any) => (
                        <List.Item className="List__Item">
                            <List.Item.Meta
                                avatar={img && <Avatar src={img}/>}
                                title={<p onClick={() => handler(value)}>{label}</p>}
                            />

                            <div className="List__Item--Selected">
                                {isSelected && <CheckOutlined/>}
                            </div>
                        </List.Item>
                    )}
                />
            </section>
        )
    }

    const renderWindSpeedList = () => {
        return renderList("Wind Speed", WindSpeedItems, () => {
        })
    }

    const renderTemperatureList = () => {
        const handleChange = (value: string) => i18n.changeLanguage(value);
        return renderList("Temperature", TemperatureMeasurementItems, handleChange)
    }

    const renderLanguagesList = () => {
        return renderList("config-drawer.language-title", LanguageItems, () => {
        })
    }


    return (
        <Drawer
            title="Weather Configuration"
            placement="right"
            onClose={onClose}
            visible={isVisible}
        >
            {renderWindSpeedList()}
            {renderTemperatureList()}
            {renderLanguagesList()}
        </Drawer>
    );
};

export default ConfigDrawer;