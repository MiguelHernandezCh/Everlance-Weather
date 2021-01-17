import React, {useState} from 'react';
import './App.less';
import {Layout} from 'antd';
import Header from "./components/header/header.component";
import SearchBox from "./components/search-box/search-box.component";
import Location from "./components/location/location.component";

const {Content, Footer} = Layout;

function App() {
    const [cities, setCities] = useState([]);
    const handleResults = (results: []) => {
        setCities(results)
    }
    console.log("CITIES", cities);
    return (
        <Layout>
            <Header/>
            <Content>
                <SearchBox setResults={handleResults}/>
                <Location/>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default App;
