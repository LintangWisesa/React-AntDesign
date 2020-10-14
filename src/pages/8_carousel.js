import React from 'react';
import { Carousel, Row, Col } from 'antd';

class CarouselAD extends React.Component {

    render(){

        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: 'lightsalmon',
        };
        
        return(
        <div style={{marginLeft:'30px', marginRight:'30px'}}>

            <h3>Carousel</h3>
            
            <Carousel afterChange={(a, b, c) => {console.log(a, b, c)}}>
                <div>
                <h3 style={contentStyle}>Image 1</h3>
                </div>
                <div>
                <h3 style={contentStyle}>Image 2</h3>
                </div>
                <div>
                <h3 style={contentStyle}>Image 3</h3>
                </div>
                <div>
                <h3 style={contentStyle}>Image 4</h3>
                </div>
            </Carousel>

            <hr style={{margin:'50px'}}/>

            <h3>Dot Position Carousel</h3>
            
            <Row gutter={[24,8]}>
                <Col span={6}>
                    <Carousel dotPosition={"bottom"} afterChange={(a, b, c) => {console.log(a, b, c)}}>
                        <div>
                        <h3 style={contentStyle}>Image 1</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>Image 2</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>Image 3</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>Image 4</h3>
                        </div>
                    </Carousel>
                </Col>
                <Col span={6}>
                    <Carousel dotPosition={"top"} afterChange={(a, b, c) => {console.log(a, b, c)}}>
                        <div>
                        <h3 style={contentStyle}>Image 1</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>Image 2</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>Image 3</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>Image 4</h3>
                        </div>
                    </Carousel>
                </Col>
                <Col span={6}>
                    <Carousel dotPosition={"left"} afterChange={(a, b, c) => {console.log(a, b, c)}}>
                        <div>
                        <h3 style={contentStyle}>Image 1</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>Image 2</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>Image 3</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>Image 4</h3>
                        </div>
                    </Carousel>
                </Col>
                <Col span={6}>
                    <Carousel dotPosition='right' afterChange={(a, b, c) => {console.log(a, b, c)}}>
                        <div>
                        <h3 style={contentStyle}>Image 1</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>Image 2</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>Image 3</h3>
                        </div>
                        <div>
                        <h3 style={contentStyle}>Image 4</h3>
                        </div>
                    </Carousel>
                </Col>
            </Row>

            <hr style={{margin:'50px'}}/>

            <h3>Carousel Autoplay</h3>
            
            <Carousel autoplay afterChange={(a, b, c) => {console.log(a, b, c)}}>
                <div>
                <h3 style={contentStyle}>Image 1</h3>
                </div>
                <div>
                <h3 style={contentStyle}>Image 2</h3>
                </div>
                <div>
                <h3 style={contentStyle}>Image 3</h3>
                </div>
                <div>
                <h3 style={contentStyle}>Image 4</h3>
                </div>
            </Carousel>

            <hr style={{margin:'50px'}}/>

        </div>
    )}
}

export default CarouselAD;