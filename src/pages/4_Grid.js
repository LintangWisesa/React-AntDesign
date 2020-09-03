import React from 'react';
import { Row, Col } from 'antd';

class GridAD extends React.Component {
    
    render(){

        const h3 = {padding:"20px"}
        const row = {margin:"20px"}
        const a = {textAlign:'center', padding:"20px", color:'black', backgroundColor:'lightblue'}
        const b = {textAlign:'center', padding:"20px", color:'black', backgroundColor:'lightpink'}
        const style = { background: '#0092ff', padding: '8px 0' };
        
        return(
        <div>

            <h3 style={h3}>Basic Grid</h3>
            <Row style={row}>
                <Col style={a} span={24}>col</Col>
            </Row>
            <Row style={row}>
                <Col style={a} span={12}>col-12</Col>
                <Col style={b} span={12}>col-12</Col>
            </Row>
            <Row style={row}>
                <Col style={a} span={8}>col-8</Col>
                <Col style={b} span={8}>col-8</Col>
                <Col style={a} span={8}>col-8</Col>
            </Row>
            <Row style={row}>
                <Col style={a} span={6}>col-6</Col>
                <Col style={b} span={6}>col-6</Col>
                <Col style={a} span={6}>col-6</Col>
                <Col style={b} span={6}>col-6</Col>
            </Row>

            <h3>Responsive Grid</h3>
            <Row style={row} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col style={a} className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col style={b} className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col style={a} className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col style={b} className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
            
        </div>
    )}
}

export default GridAD;