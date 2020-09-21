import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class LayoutAD extends React.Component {
    
    render(){

        const header = {color:'black', backgroundColor:'#F6A8A6'}
        const content = {color:'black', backgroundColor:'#F9F0C1', padding:'30px'}
        const footer = {color:'black', backgroundColor:'#A5C8E4'}
        const sider = {color:'black', backgroundColor:'#C0ECCC'}
        const h3 = {padding:"20px"}

        return(
        <div style={{marginLeft:'30px', marginRight:'30px'}}>

            <h3 style={h3}>Layout 1</h3>
            <Layout>
                <Header style={header}><b>Header</b></Header>
                <Content style={content}><b>Content</b></Content>
                <Footer style={footer}><b>Footer</b></Footer>
            </Layout>

            <h3 style={h3}>Layout 2</h3>
            <Layout>
                <Header style={header}><b>Header</b></Header>
                <Layout>
                    <Sider style={sider}><b>Sider</b></Sider>
                    <Content style={content}><b>Content</b></Content>
                </Layout>
                <Footer style={footer}><b>Footer</b></Footer>
            </Layout>

            <h3 style={h3}>Layout 3</h3>
            <Layout>
                <Header style={header}><b>Header</b></Header>
                <Layout>
                    <Content style={content}><b>Content</b></Content>
                    <Sider style={sider}><b>Sider</b></Sider>
                </Layout>
                <Footer style={footer}><b>Footer</b></Footer>
            </Layout>

            <h3 style={h3}>Layout 4</h3>
            <Layout>
                <Sider style={sider}><b>Sider</b></Sider>
                <Layout>
                    <Header style={header}><b>Header</b></Header>
                    <Content style={content}><b>Content</b></Content>
                    <Footer style={footer}><b>Footer</b></Footer>
                </Layout>
            </Layout>

        </div>
    )}
}

export default LayoutAD;