import React from 'react';
import { Timeline } from 'antd';
import { CheckSquareTwoTone, CloseSquareTwoTone } from '@ant-design/icons';

class TimelineAD extends React.Component {

    render(){

        return(
        <div style={{marginLeft:'30px', marginRight:'30px'}}>

            {/* BASIC TIMELINE */}
            <h3 style={{marginBottom:'20px'}}>1. Basic Timeline</h3>

            <Timeline>
                <Timeline.Item>Pesanan diproses</Timeline.Item>
                <Timeline.Item>Pesanan siap dikirim</Timeline.Item>
                <Timeline.Item>Berangkat dari Jakarta</Timeline.Item>
                <Timeline.Item>Masuk ke hub Surabaya</Timeline.Item>
            </Timeline>

            <hr style={{margin:'20px'}}/>

            <h3 style={{marginBottom:'20px'}}>2. Custom Timeline</h3>

            <Timeline>
                <Timeline.Item dot={<CheckSquareTwoTone twoToneColor="#52c41a" />} color="green">
                    Pesanan diproses<br/>
                    Senin, 18/10/2020 13:00 WIB
                </Timeline.Item>
                <Timeline.Item dot={<CheckSquareTwoTone twoToneColor="#52c41a" />} color="green">
                    Pesanan siap dikirim<br/>
                    Senin, 18/10/2020 14:15 WIB
                </Timeline.Item>
                <Timeline.Item dot={<CheckSquareTwoTone twoToneColor="#52c41a" />} color="green">
                    Berangkat dari Jakarta<br/>
                    Selasa, 19/10/2020 01:00 WIB
                </Timeline.Item>
                <Timeline.Item dot={<CloseSquareTwoTone twoToneColor="#eb2f96" />} color="red">
                    Tertahan di hub Lamongan<br/>
                    Selasa, 19/10/2020 13:30 WIB
                </Timeline.Item>
                <Timeline.Item dot={<CheckSquareTwoTone twoToneColor="#52c41a" />} color="green">
                    Masuk ke hub Surabaya<br/>
                    Selasa, 19/10/2020 18:30 WIB
                </Timeline.Item>
            </Timeline>

        </div>
    )}
}

export default TimelineAD;