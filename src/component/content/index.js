import React from 'react'
import './index.css';
import { List } from 'antd';






export default class MyContent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data : []
        };
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
        let content = (this.props.contentData === undefined || this.props.contentData.length === 0 ? 
            <h2 style={{justifyContent: 'center', alignItems: 'center'}}>没有符合条件的内容。</h2> :
            <List
            size="large"
            header={<div>符合条件的内容</div>}
            bordered
            dataSource={this.props.contentData}
            renderItem={item => (<List.Item><div dangerouslySetInnerHTML={{__html: item}}></div></List.Item>)}
            pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 5,
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