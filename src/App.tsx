import React from 'react';
import './App.less';
import {Layout} from 'antd';
import Header from "./components/header/header.component";
import SearchBox from "./components/search-box/search-box.component";

const {Content, Footer} = Layout;

function App() {
    return (
        <Layout>
            <Header/>
            <Content>
                <SearchBox/>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default App;
