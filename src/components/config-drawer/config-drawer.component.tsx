import React, {useState} from 'react';
import {Avatar, Divider, Drawer, List, Switch} from "antd";
import {getLanguageItems} from "./config-drawer.resources";
import "./config-drawer.styles.less"
import {CheckOutlined} from '@ant-design/icons';
import {useTranslation} from "react-i18next";
import {changeLanguage} from "../../i18n";
import {getConfigOption, setConfigOption} from "../../utils/config.utils";

interface Props {
    isVisible: boolean;
    onClose: any;
}

const ConfigDrawer: React.FC<Props> = ({isVisible, onClose}) => {
    const {t} = useTranslation();
    const [isChecked, setIsChecked] = useState(getConfigOption())

    const handleSwitchChange = (newValue: boolean) => {
        setConfigOption(newValue)
        setIsChecked(newValue)
        setTimeout(() => {
            window.location.reload();
        }, 1000)
    }

    return (
        <Drawer
            title={t("config-drawer.title")}
            placement="right"
            onClose={onClose}
            visible={isVisible}
        >
            <section className="List__Container">
                <Divider orientation="center">{t("config-drawer.language-title")}</Divider>
                <List
                    dataSource={getLanguageItems()}
                    renderItem={({label, img, isSelected, value}: any) => (
                        <div onClick={() => changeLanguage(value)}>
                            <List.Item className="List__Item">
                                <List.Item.Meta
                                    avatar={img && <Avatar src={img}/>}
                                    title={<p>{label}</p>}
                                />

                                <div className="List__Item--Selected">
                                    {isSelected && <CheckOutlined/>}
                                </div>
                            </List.Item>
                        </div>

                    )}
                />


                <div className="Switch__Container">
                    {t("config-drawer.switch-label")} <Switch onChange={handleSwitchChange} checked={isChecked}/>
                </div>
            </section>
        </Drawer>
    );
};

export default ConfigDrawer;