import React, {useState} from 'react';
import "./header.styles.less"
import {Button} from "antd";
import {SettingOutlined} from '@ant-design/icons';
import ConfigDrawer from "../config-drawer/config-drawer.component";

const Header: React.FC = () => {
    const [isDrawerVisible, setDrawerVisible]  = useState(false);


    const handleDrawerToggle = ()=>{
        setDrawerVisible(!isDrawerVisible)
    }

    return (
        <section className="Header__Container">
            <a className="Header__Logo" href="https://www.everlance.com/" target="_blank" rel="noreferrer">&nbsp;</a>
            <div className="Header__MenuButton">
                <Button type="primary" icon={<SettingOutlined />} onClick={handleDrawerToggle}/>
            </div>
            <ConfigDrawer isVisible={isDrawerVisible} onClose={handleDrawerToggle}/>
        </section>
    );
};

export default Header;