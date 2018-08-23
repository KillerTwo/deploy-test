import React from 'react'
import { Row, Col, Divider, Spin, Icon } from 'antd';
import MySearch from '../component/search';
import MyContent from '../component/content';
import axios from 'axios';
import MyConfig from '../config';

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isSpin: false,
            searchValue: ''
        };
        console.log(MyConfig.getUrl());
    }
    // 接收MySearch的搜索数据
    handlerSearch = (data,value)=>{
        this.setState({
            data: data,
            searchValue: value
        });
    }
    handlerSpin = (flag)=>{
        this.setState({
            isSpin: flag
        })
    }
    handlerPageNum = (pageNum)=>{
        //console.log(pageNum);
        // this.setState({
        //     pageNum
        // });
        // 执行请求方法
        let self = this;
        axios.get(MyConfig.searchUrl, {
            params: {
              keyword: self.state.searchValue,
              pageNum: pageNum,
              pageSize: 10
            }
          })
          .then(function (response) {
            //self.props.startSearch(false);
            if(response.data.msg === 'success'){
                //self.props.onSearch();
                self.handlerSearch(response.data.result, self.state.searchValue);
            }
          })
          .catch(function (error) {
            console.log(error);
            //self.props.onSearch([]);
            self.handlerSearch([], self.state.searchValue);
          });
    }

    render() {
        let antIcon = <Icon type='loading' style={{fontSize: 24}}></Icon>
        return (
            <div>
                
                <Row>
                    <Col span={8} offset={8}>
                        <MySearch onSearch={this.handlerSearch} startSearch={this.handlerSpin} />
                    </Col>
                </Row>
                <Row>
                    <Col span='24'>
                        <Divider orientation="left">搜索内容</Divider>
                    </Col>
                </Row>
                
                <Row>
                    <Col span={16} offset={4}>
                        <Spin tip="搜索中..." 
                            spinning={this.state.isSpin}
                            indicator={antIcon}
                        >
                            <MyContent contentData={this.state.data} pageNum={this.handlerPageNum}/>
                        </Spin>    
                        
                    </Col>
                </Row> 

            </div>
            
        );
    }
}

