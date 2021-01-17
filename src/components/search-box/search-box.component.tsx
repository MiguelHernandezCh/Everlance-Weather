import React from 'react';
import "./search-box.styles.less"
import {Typography, Input, Button} from 'antd';

const {Title} = Typography;
const {Search} = Input;

interface Props {
    onSearch: any,
    isLoading: boolean
}

const SearchBox: React.FC<Props> = ({isLoading, onSearch}) => {
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
                    onSearch={onSearch}
                />
            </div>
        </section>
    );
};

export default SearchBox;