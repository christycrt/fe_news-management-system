import React from 'react'
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
import { Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LinkMenuItem = styled(Link)`
    ${props => console.log(props.selected)}
    color: ${props => props.selected ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.65)"};
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
    render() {
        return (
            <div>
                {this.state.data === "ready" ?
                    <Layout>
                        <nav class="navbar navbar-light bg-light justify-content-between" style={{ position: 'fixed', zIndex: 1, width: '100%', height: '50px' }}>
                            <a class="navbar-brand">Navbar</a>
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </nav>
                        <Sider
                            collapsible
                            collapsed={this.state.collapsed}
                            onCollapse={this.onCollapse}
                            style={{
                                overflow: 'auto',
                                overflowX: 'hidden',
                                height: '100vh',
                                position: 'fixed',
                                left: 0,
                                zIndex: 2
                            }}
                        >
                            <div className="logo" style={{ height: "80px" }}>
                                News Management System
                            </div>
                            <Menu theme="dark" mode="inline"
                                defaultOpenKeys={[this.state.typePage]}
                                defaultSelectedKeys={[this.state.page]}>
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
                                <SubMenu key="news" title="News" icon={<HomeOutlined className={`${this.state.collapsed ? "d-block" : "d-none"}`} />}>
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
                                <SubMenu key="targetgroup" title="Target Group" icon={<HomeOutlined className={`${this.state.collapsed ? "d-block" : "d-none"}`} />}>
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
                        </Sider>
                        <Layout className="site-layout" style={{ marginLeft: this.state.collapsed ? "80px" : "200px", transition: "0.2s" }}>
                            <div style={{ paddingTop: "50px" }}>
                                {this.props.children}
                            </div>
                        </Layout>
                    </Layout> : ''}
            </div>
        )
    }
}

export default LayoutPage