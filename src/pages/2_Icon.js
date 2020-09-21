import React from 'react';
import {
    HomeOutlined, SettingFilled, SmileOutlined, SyncOutlined, LoadingOutlined,
    SmileTwoTone, HeartTwoTone, CheckCircleTwoTone,
    StarOutlined, StarFilled, StarTwoTone
} from '@ant-design/icons';

class IconAD extends React.Component {
    
    size = () => {return {fontSize: 30, marginLeft:'30px', marginRight:'30px'}}

    render(){

        return(
        <div style={this.size()}>
            
            <h3>Basic</h3>
            <HomeOutlined />
            <SettingFilled />
            <SmileOutlined />
            <SyncOutlined spin />
            <SmileOutlined rotate={180} />
            <LoadingOutlined />

            <h3>Two-tone Icons</h3>
            <SmileTwoTone />
            <HeartTwoTone twoToneColor="#eb2f96" />
            <CheckCircleTwoTone twoToneColor="#52c41a" />

            <h3>Outlined, Two-tone & Filled</h3>
            <StarOutlined />
            <StarFilled />
            <StarTwoTone twoToneColor="#eb2f96" />

        </div>
    )}
}

export default IconAD;