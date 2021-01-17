import React from 'react';
import {Layout} from 'antd';

const {Footer: AntdFooter} = Layout;

const Footer: React.FC = () => {
    return (
        <AntdFooter className="Footer__Container">
            Everlance Code Challenge By <a href="https://miguelhernandezch.github.io/me" target="_blank" rel="noreferrer">Miguel Hernandez</a>
            <br/>
            <br/>
            <a href="https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/fileexport/Export_D0df29bca94701ed503c6cff8bc80569a.pdf" target="_blank" rel="noreferrer">Component Analysis</a>
        </AntdFooter>
    );
};

export default Footer;