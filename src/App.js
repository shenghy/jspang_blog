import React from 'react'
import 'antd/dist/antd.css'
import './style/app.css'
import Index from './pages/Index'
import {Row, Col ,  Menu, Icon , Affix} from 'antd'
import { BrowserRouter as Router, Route, Link  } from "react-router-dom"




function App(){

    return (
        <Router>
            <Affix offsetTop={0}>
                <div className="header-top">
                    <Row type="flex" justify="center" >
                        <Col xl={3} lg={4} md={4} sm={0} xs={0} className="logo">
                            <div>技术胖</div>
                            <div>jspang.com</div>
                        </Col>
                        <Col  xl={9} lg={8} md={8} sm={24} xs={24}>
                            <Menu mode="horizontal" theme="dark">
                                <Menu.Item key="Index">
                                    <Icon type="home" />
                                    博客首页
                                </Menu.Item>
                                <Menu.Item key="Video">
                                    <Icon type="video-camera" />
                                    视频教程
                                </Menu.Item>
                                <Menu.Item key="life">
                                    <Icon type="smile" />
                                    生活趣事
                                </Menu.Item>
                                <Menu.Item key="money">
                                    <Icon type="money-collect" />
                                    付费课程
                                </Menu.Item>

                            </Menu>
                        </Col>
                        <Col  span={3} offset={1}>
                            <div className="header-login">
                                登录  | 注册
                            </div>
                        </Col>
                    </Row>
                    
                </div>
            </Affix>

            <div className="main">
                 <Route path="/" exact component={Index} />
            </div>


            
        </Router>
    )
}

export default App