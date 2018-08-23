import React from 'react'
import { Input } from 'antd';
import './index.css';
import axios from 'axios';
import MyConfig from '../../config';

const Search = Input.Search;


export default class MySearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [

            ],
            pageNum: 1,
            searchValue: '' 
        }
    }
    componentWillMount() {
        // this.setState({
        //     pageNum: this.props.pageChange,
        // });
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
        this.setState({
            searchValue: value,
            // pageNum: this.props.pageChange,
        });
        this.props.startSearch(true);
        let self = this;
        axios.get(MyConfig.searchUrl, {
            params: {
              keyword: value,
              pageNum: self.state.pageNum,
              pageSize: 10
            }
          })
          .then(function (response) {
            //console.log(response);
            self.props.startSearch(false);
            if(response.data.msg === 'success'){
                      // 调用父组件传递的时间处理器方法想父组件传递数据
                self.props.onSearch(response.data.result, value);
            }
          })
          .catch(function (error) {
            console.log(error);
            self.props.onSearch([]);
          });
    }

    render() {
        // if(this.props.pageChange !== this.state.pageNum){
        //     // this.setState({
        //     //     pageNum: this.props.pageChange
        //     // });
        //     console.log('重新请求。。。');
        //     this.handlerClickSearch(this.state.searchValue);
        // }
        //console.log('search pagenum ', this.props.pageChange);
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