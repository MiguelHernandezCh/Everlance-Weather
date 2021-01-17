import React, {useState} from 'react';
import "./search-box.styles.less"
import {Typography, Input, Button} from 'antd';
import { getResultByQuery} from "../../services/mock.service";

const {Title} = Typography;
const {Search} = Input;

interface Props {
    setResults: any
}

const SearchBox: React.FC<Props> = ({setResults}) => {
    const [isLoading, setLoading] = useState(false);
    const handleSearch = async (query: string) => {
        if (!query) return;
        setLoading(true);

        try {
            // const {data} = await searchByName(query);
        } catch (e) {
            setResults(null)
        }

        setTimeout(() => {
            setResults(getResultByQuery())
            setLoading(false)
        }, 3000)


    }

    return (
        <section className="SearchBox__Container">
            <div className="SearchBox__Content">
                <Title level={3}>How is the weather?</Title>
                <Search
                    className="SearchBox__Input"
                    placeholder="Search by city name"
                    allowClear
                    enterButton={<Button loading={isLoading}>Go</Button>}
                    size="large"
                    onSearch={handleSearch}
                />
            </div>
        </section>
    );
};

export default SearchBox;