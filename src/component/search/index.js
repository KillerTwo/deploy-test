import React from 'react'
import { Input } from 'antd';
import './index.css';
import axios from 'axios';


const Search = Input.Search;


export default class MySearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [

            ]
        }
    }
    // handlerClickSearch = (value)=>{
    //     console.log('搜索的信息为:',value);
    //     let self = this;
    //     axios.get('http://10.10.10.226:8001/spring-boot-solr-0.0.1-SNAPSHOT/solr/description', {
    //         params: {
    //           keyword: value,
    //           pageNum: 0,
    //           pageSize: 0
    //         }
    //       })
    //       .then(function (response) {
    //         //console.log(response);
    //         if(response.data.msg === 'success'){
    //            // console.log(response.data.result);
    //             self.props.onSearch(response.data.result);        // 调用父组件传递的时间处理器方法想父组件传递数据
    //             // self.props.onSearch([]);
    //         }
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //         self.props.onSearch([]);
    //       });
    // }
    handlerClickSearch = (value)=>{
        console.log('搜索的信息为:',value);
        let self = this;
        axios.get('http://127.0.0.1:8080/solr/description', {
            params: {
              keyword: value,
              pageNum: 0,
              pageSize: 0
            }
          })
          .then(function (response) {
            //console.log(response);
            if(response.data.msg === 'success'){
               // console.log(response.data.result);
                //self.props.onSearch(response.data.result.keyWordContent);        // 调用父组件传递的时间处理器方法想父组件传递数据
                self.props.onSearch(response.data.result);
                // self.props.onSearch([]);
            }
          })
          .catch(function (error) {
            console.log(error);
            self.props.onSearch([]);
          });
    }

    render() {
        return (
            <div className='searchStyle'>
                    <Search
                        placeholder="输入关键字"
                        enterButton="搜索"
                        size="large"
                        onSearch={this.handlerClickSearch}
                        />
            </div>
        );
    }
}