import React, {useState} from 'react';
import './App.less';
import {BackTop, Layout} from 'antd';
import Header from "./components/header/header.component";
import SearchBox from "./components/search-box/search-box.component";
import Location from "./components/location/location.component";
import CitiesList from "./components/cities-list/cities-list.component";
import Footer from "./components/footer/footer.component";
import {searchByName} from "./services/weather.service";
import {getConfigOption} from "./utils/config.utils";
import {getMockResultByQuery} from "./services/mock.service";

const {Content} = Layout;

function App() {
    const [isLoading, setLoading] = useState(false);
    const [cities, setCities] = useState([]);
    const handleSearch = async (query: string) => {
        if (!query) return;

        const shouldUseLocalData = getConfigOption();
        if (shouldUseLocalData) {
            setCities(getMockResultByQuery())
            return;
        }

        setLoading(true);
        try {
            const {data} = await searchByName(query);
            setCities(data)
            setLoading(false)
        } catch (e) {
            setCities([])
            setLoading(false)
        }
    }

    return (
        <Layout>
            <BackTop/>
            <Header/>
            <Content>
                <SearchBox onSearch={handleSearch} isLoading={isLoading}/>
                <Location/>
                <CitiesList cities={cities} isLoading={isLoading}/>
            </Content>
            <Footer/>
        </Layout>
    );
}

export default App;
