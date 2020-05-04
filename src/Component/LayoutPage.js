import React from 'react'
import Styed from 'styled-components'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    AreaChartOutlined,
    HomeOutlined,
    ReadOutlined,
    NotificationOutlined,
    PlusOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SiderStyle = Styed(Sider)`
    background-color: #050042;
    .ant-menu-dark {
        background: #050042;
    }
    .ant-menu-dark .ant-menu-inline.ant-menu-sub {
        background: #4A4F7B;
    }
    .ant-menu.ant-menu-dark .ant-menu-item-selected {
        background: #797DA4;
    }
`
class LayoutPage extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SiderStyle collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" style={{ height: "60px" }}>
                        NMS
                    </div>
                    <Menu theme="dark" defaultOpenKeys={['sub1']} defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="home" icon={<HomeOutlined />}>
                            Home
                        </Menu.Item>
                        <SubMenu key="news" title="News">
                            <Menu.Item key="allnews" icon={<ReadOutlined />}>All news</Menu.Item>
                            <Menu.Item key="createnews" icon={<PlusOutlined />}>Create news</Menu.Item>
                            <Menu.Item key="createnewstype" icon={<NotificationOutlined />}>Create news type</Menu.Item>
                        </SubMenu>
                        <SubMenu key="targetgroup" title="Target Group">
                            <Menu.Item key="alltargetgroup" icon={<TeamOutlined />}>All target group</Menu.Item>
                            <Menu.Item key="createtargetgroup" icon={<PlusOutlined />}>Create news type</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="dashboard" icon={<AreaChartOutlined />}>
                            Dashboard
                        </Menu.Item>
                        {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />} /> */}
                    </Menu>
                </SiderStyle>
                <Layout className="site-layout">
                    <nav class="navbar navbar-light bg-light" style={{ height: "50px" }}>
                        <a class="navbar-brand" href="#">
                            <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
                                Bootstrap
                        </a>
                    </nav>
                    {this.props.children}
                </Layout>
            </Layout>
        );
    }
}
export default LayoutPage