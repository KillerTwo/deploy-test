import React from 'react'
import './index.css';
import { List } from 'antd';
import { Link } from 'react-router-dom';





export default class MyContent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data : []
        };
    }
    handlerPagination = (pageNum)=>{
        this.props.pageNum(pageNum);
    }



    render() {
        // let content = (this.props.contentData === undefined || this.props.contentData.length === 0 ? 
        //     <h2 style={{justifyContent: 'center', alignItems: 'center'}}>没有符合条件的内容。</h2> :
        //     <List
        //     size="large"
        //     header={<div>符合条件的内容</div>}
        //     bordered
        //     dataSource={this.props.contentData}
        //     renderItem={item => (<List.Item>{item}</List.Item>)}
        //     pagination={true}
        //     />
        // );
        //console.log('this.props.contentData.count[0]:',parseInt(this.props.contentData.count[0],10));
        let content = (this.props.contentData === undefined || this.props.contentData.length === 0 ? 
            <h2 style={{justifyContent: 'center', alignItems: 'center'}}>没有符合条件的内容。</h2> :
            
                <List
                size="large"
                header={<div>符合条件的内容</div>}
                bordered
                dataSource={this.props.contentData.keyWordContent}
                renderItem={(item,index) => (<List.Item><Link to={
                    {
                        pathname: '/detail',
                        state: {
                            content: this.props.contentData.content[index]
                        }
                    }
                }><div dangerouslySetInnerHTML={{__html: item+'......'}}></div></Link></List.Item>)}
                pagination={{
                    onChange: (page) => {
                        console.log('当前页：',page);
                        this.handlerPagination(page);
                    },
                    pageSize: 10,
                    total: parseInt(this.props.contentData.count[0], 10)
                }}
                />
            
        );
        return (
            <div>
               {content}
               
            </div>
        );
    }
}