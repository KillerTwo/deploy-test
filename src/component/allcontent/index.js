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
                        <Divider>With Text</Divider>
                        <p>{this.props.match.params.id}</p>
                        <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Sed nonne 
                            merninisti licere mihi ista probare, quae
                             sunt a te dicta? Refert tamen, quo modo.
                        </p>
                        <p>
                            {this.props.content}
                        </p>
                    </Col>
                </Row>
            </div>
            
        );
    }
}

