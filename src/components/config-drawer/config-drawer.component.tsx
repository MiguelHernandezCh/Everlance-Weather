import React from 'react';
import {Avatar, Divider, Drawer, List} from "antd";
import {getLanguageItems} from "./config-drawer.resources";
import "./config-drawer.styles.less"
import {CheckOutlined} from '@ant-design/icons';
import {useTranslation} from "react-i18next";
import {changeLanguage} from "../../i18n";

interface Props {
    isVisible: boolean;
    onClose: any;
}

const ConfigDrawer: React.FC<Props> = ({isVisible, onClose}) => {
    const {t} = useTranslation();

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
            </section>
        </Drawer>
    );
};

export default ConfigDrawer;