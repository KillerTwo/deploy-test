import React from 'react'
import { Row, Col, Divider } from 'antd';
import MySearch from '../component/search';
import MyContent from '../component/content';
import { Link } from 'react-router-dom';
export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    // 接收MySearch的搜索数据
    handlerSearch = (data)=>{
        this.setState({
            data: data
        });
    }

    render() {
        return (
            <div>
                
                <Row>
                    <Col span={8} offset={8}>
                        <MySearch onSearch={this.handlerSearch} />
                    </Col>
                </Row>
                <Row>
                    <Col span='24'>
                        <Divider orientation="left">搜索内容</Divider>
                    </Col>
                </Row>
                
                <Row>
                    <Col span={16} offset={4}>
                        
                        <MyContent contentData={this.state.data}/>
                        
                        
                    </Col>
                </Row> 

            </div>
            
        );
    }
}

