import React from 'react';
import {Layout} from 'antd';
import {useTranslation} from "react-i18next";

const {Footer: AntdFooter} = Layout;

const Footer: React.FC = () => {
    const {t} = useTranslation();
    return (
        <AntdFooter className="Footer__Container">
            {t("footer.title")} <a href="https://miguelhernandezch.github.io/me" target="_blank" rel="noreferrer">Miguel Hernandez</a>
            <br/>
            <br/>
            <a href="https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/fileexport/Export_D833a47bec7f6cf2a15045de54f790dfa.pdf" target="_blank" rel="noreferrer">{t("footer.analysis")}</a>
        </AntdFooter>
    );
};

export default Footer;