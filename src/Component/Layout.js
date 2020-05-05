import React from 'react'
import withAuth from '../HOC/withAuth'
import styled from 'styled-components'
import { Layout, Menu } from 'antd';
import {
    AreaChartOutlined,
    HomeOutlined,
    ReadOutlined,
    NotificationOutlined,
    PlusOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const { Sider } = Layout;
const { SubMenu } = Menu;


const LinkMenuItem = styled(Link)`
    ${props => console.log(props.selected)}
    color: ${props => props.selected ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.65)"};
    &:hover {
        color: rgba(255, 255, 255, 1);
    }
    
    `
const LinkLogo = styled(Link)`
    color: rgba(255, 255, 255, 1);
    &:hover {
        color: rgba(255, 255, 255, 1);
    }
`
class LayoutPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 'wait',
            system: '',
            typePage: '',
            page: '',
            collapsed: false,
        }
    }
    async componentWillMount() {
        const { system } = this.props.match.params
        await this.setState({ system: system })
        let path = this.props.location.pathname + "";
        let page = '';
        let typePage = '';
        if (path.substring(this.state.system.length + 1) === "/home") {
            page = 'home'
        } else
            if (path.substring(this.state.system.length + 1) === "/dashboard") {
                page = 'dashboard'
            } else
                if (path.substring(this.state.system.length + 1, this.state.system.length + 6) === "/news") {
                    page = path.substring(this.state.system.length + 7)
                    typePage = 'news'
                } else
                    if (path.substring(this.state.system.length + 1, this.state.system.length + 13) === "/targetgroup") {
                        page = path.substring(this.state.system.length + 14)
                        typePage = 'targetgroup'
                    }
        await this.setState({ typePage: typePage, page: page, data: "ready" })
        console.log(this.state)
    }
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    onChangePage = (page, typePage) => {
        this.setState({ typePage: typePage, page: page, data: "ready" })
    }
    onLogout = () => {
        localStorage.clear()
    }
    render() {
        return (
            <div>
                {this.state.data === "ready" ?
                    <Layout>
                        <Navbar style={{ position: 'fixed', zIndex: 1, }} />
                        <Sider
                            className="justify-content-between"
                            collapsible
                            collapsed={this.state.collapsed}
                            onCollapse={this.onCollapse}
                            width='280px'
                            style={{
                                overflow: 'auto',
                                overflowX: 'hidden',
                                height: '100vh',
                                position: 'fixed',
                                left: 0,
                                zIndex: 2,
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '100%',
                                // alignItems: 'center'
                            }}>
                                <div>
                                    <Menu theme="dark" mode="inline"
                                        defaultOpenKeys={[this.state.typePage]}
                                        defaultSelectedKeys={[this.state.page]}>
                                        <Menu.Item
                                            icon={<img src='/image/pic news.png' width="40px" height="40px"
                                                className={`${this.state.collapsed ? "d-block" : "d-none"}`} />}
                                            style={{ height: '60px', paddingTop: '10px', paddingLeft: '20px' }}
                                        >
                                            <LinkLogo to={`/`} >
                                                <div style={{ width: "160px" }}>
                                                    <img src='/image/pic news.png' width="40px" height="40px"
                                                        className={`${this.state.collapsed ? "d-none" : "d-inline-block"} mr-2`} />
                                                    <span style={{ fontSize: "20px" }}>News Managemet</span>
                                                </div>
                                            </LinkLogo>
                                        </Menu.Item>
                                        <Menu.Item key="home" icon={<HomeOutlined className={`${this.state.collapsed ? "d-block" : "d-none"}`} />}>
                                            <LinkMenuItem
                                                selected={this.state.page === "home" ? true : false}
                                                to={`/${this.state.system}/home`}
                                                onClick={() => this.onChangePage('home', '')}
                                            >
                                                <div style={{ width: "200px" }}>
                                                    <HomeOutlined className={`${this.state.collapsed ? "d-none" : "d-inline-block"}`} />
                                                    {this.state.system}
                                                </div>
                                            </LinkMenuItem>
                                        </Menu.Item>
                                        <SubMenu key="news" title="News" icon={<ReadOutlined className={`${this.state.collapsed ? "d-block" : "d-none"}`} />}>
                                            <Menu.Item key="allnews">
                                                <LinkMenuItem
                                                    selected={this.state.page === "allnews" ? true : false}
                                                    to={`/${this.state.system}/news/allnews`}
                                                    onClick={() => this.onChangePage('allnews', 'news')}
                                                >
                                                    <div style={{ width: "200px" }}>
                                                        <ReadOutlined />
                                            All news
                                        </div>
                                                </LinkMenuItem>
                                            </Menu.Item>
                                            <Menu.Item key="createnews">
                                                <LinkMenuItem
                                                    selected={this.state.page === "createnews" ? true : false}
                                                    to={`/${this.state.system}/news/createnews`}
                                                    onClick={() => this.onChangePage('createnews', 'news')}
                                                >
                                                    <div style={{ width: "200px" }}>
                                                        <PlusOutlined />
                                            Create news
                                        </div>
                                                </LinkMenuItem>
                                            </Menu.Item>
                                            <Menu.Item key="createnewstype">
                                                <LinkMenuItem
                                                    selected={this.state.page === "createnewstype" ? true : false}
                                                    to={`/${this.state.system}/news/createnewstype`}
                                                    onClick={() => this.onChangePage('createnewstype', 'news')}
                                                >
                                                    <div style={{ width: "200px" }}>
                                                        <NotificationOutlined />
                                            Create news type
                                        </div>
                                                </LinkMenuItem>
                                            </Menu.Item>
                                        </SubMenu>
                                        <SubMenu key="targetgroup" title="Target Group" icon={<TeamOutlined className={`${this.state.collapsed ? "d-block" : "d-none"}`} />}>
                                            <Menu.Item key="alltargetgroup">
                                                <LinkMenuItem
                                                    selected={this.state.page === "alltargetgroup" ? true : false}
                                                    to={`/${this.state.system}/targetgroup/alltargetgroup`}
                                                    onClick={() => this.onChangePage('alltargetgroup', 'targetgroup')}
                                                >
                                                    <div style={{ width: "200px" }}>
                                                        <TeamOutlined />
                                                All target group
                                            </div>
                                                </LinkMenuItem>
                                            </Menu.Item>
                                            <Menu.Item key="createtargetgroup">
                                                <LinkMenuItem
                                                    selected={this.state.page === "createtargetgroup" ? true : false}
                                                    to={`/${this.state.system}/targetgroup/createtargetgroup`}
                                                    onClick={() => this.onChangePage('createtargetgroup', 'targetgroup')}
                                                >
                                                    <div style={{ width: "200px" }}>
                                                        <PlusOutlined />
                                                Create news type
                                            </div>
                                                </LinkMenuItem>
                                            </Menu.Item>
                                        </SubMenu>
                                        <Menu.Item key="dashboard" icon={<AreaChartOutlined className={`${this.state.collapsed ? "d-block" : "d-none"}`} />}>
                                            <LinkMenuItem
                                                selected={this.state.page === "dashboard" ? true : false}
                                                to={`/${this.state.system}/dashboard`}
                                                onClick={() => this.onChangePage('dashboard', '')}
                                            >
                                                <div style={{ width: "200px" }}>
                                                    <AreaChartOutlined className={`${this.state.collapsed ? "d-none" : "d-inline-block"}`} />
                                            Dashboard
                                        </div>
                                            </LinkMenuItem>
                                        </Menu.Item>
                                    </Menu>
                                </div>
                                <div>
                                    <Menu theme="dark" mode="inline">
                                        <Menu.Item className="text-center" icon={<AreaChartOutlined className={`${this.state.collapsed ? "d-block" : "d-none"}`} />}>
                                            <LinkMenuItem
                                                to={`/login`}
                                                onClick={() => this.onLogout()}
                                            >
                                                <div className="pl-4" style={{ width: "200px" }}>
                                                    Logout
                                                </div>
                                            </LinkMenuItem>
                                        </Menu.Item>
                                    </Menu>
                                </div>
                            </div>
                        </Sider>
                        <Layout className="site-layout" style={{ marginLeft: this.state.collapsed ? "80px" : "280px", transition: "0.2s" }}>
                            <div style={{ paddingTop: "50px" }}>
                                {this.props.children}
                            </div>
                        </Layout>
                    </Layout> : ''
                }
            </div>
        )
    }
}

export default withAuth(LayoutPage)