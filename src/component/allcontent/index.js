import React from 'react'
import { Row, Col, Divider } from 'antd';
export default class AllContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
   
    render() {
        return (
            <div>
                <Row>
                    <Col span={16} offset={4}>
                        <Divider>详情</Divider>
                        <p>{this.props.match.params.id}</p>
                        <p>
                            {this.props.location.state.content}
                        </p>
                        <p>
                            
                        </p>
                    </Col>
                </Row>
            </div>
            
        );
    }
}

