import React from 'react';
import { Menu, Button } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, MenuUnfoldOutlined,
    MenuFoldOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, } 
    from '@ant-design/icons';

const { SubMenu } = Menu;
class MenuAD extends React.Component {
    
    state = {
        current: 'mail',
        collapsed: false,
    };
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };

    render(){
        const { current } = this.state;
        return (
        <div style={{marginLeft:'30px', marginRight:'30px'}}>

            <h3>1. Top Navigation</h3>
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                    Navigation Two
                </Menu.Item>
                <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                <a href="/" rel="noopener noreferrer">
                    Navigation Four - Home
                </a>
                </Menu.Item>
            </Menu>

            <hr style={{margin:'50px'}}/>
            
            <h3>2. Sider Navigation (Inline Menu)</h3>
            <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            >
                <SubMenu
                key="sub1"
                title={
                    <span>
                    <MailOutlined />
                    <span>Navigation One</span>
                    </span>
                }
                >
                <Menu.ItemGroup key="g1" title="Item 1">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                </SubMenu>
                <SubMenu
                key="sub4"
                title={
                    <span>
                    <SettingOutlined />
                    <span>Navigation Three</span>
                    </span>
                }
                >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
            
            <hr style={{margin:'50px'}}/>
            
            <h3>3. Collapse Sider</h3>
            <div style={{ width: 256 }}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined />}>
                        Option 3
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>

            <div style={{marginBottom:'100px'}}>.</div>

        </div>
    )}
}

export default MenuAD;