import React, {useState} from 'react';
import "./search-box.styles.less"
import {Typography, Input, Button} from 'antd';

const {Title} = Typography;
const {Search} = Input;

const SearchBox: React.FC = () => {
    const [isLoading, setLoading] = useState(false);
    const handleSearch = (value: string) => {
        if(!value) return;
        console.log(value);
        setLoading(true);
    }

    return (
        <section className="SearchBox__Container">
            <div className="SearchBox__Content">
                <Title level={3}>How is the weather?</Title>
                <Search
                    className="SearchBox__Input"
                    placeholder="Search by city name"
                    allowClear
                    loading={isLoading}
                    enterButton={<Button>Go</Button>}
                    size="large"
                    onSearch={handleSearch}
                />
            </div>
        </section>
    );
};

export default SearchBox;