import React from 'react';
import "./search-box.styles.less"
import {Typography, Input, Button} from 'antd';
import {useTranslation} from "react-i18next";

const {Title} = Typography;
const {Search} = Input;

interface Props {
    onSearch: any,
    isLoading: boolean
}

const SearchBox: React.FC<Props> = ({isLoading, onSearch}) => {
    const {t} = useTranslation();
    return (
        <section className="SearchBox__Container">
            <div className="SearchBox__Content">
                <Title level={3}>{t("search-box.title")}</Title>
                <Search
                    className="SearchBox__Input"
                    placeholder={t("search-box.input")}
                    allowClear
                    enterButton={<Button loading={isLoading}>{t("search-box.button")}</Button>}
                    size="large"
                    onSearch={onSearch}
                />
            </div>
        </section>
    );
};

export default SearchBox;