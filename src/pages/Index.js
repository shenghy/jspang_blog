import React from 'react'
import 'antd/dist/antd.css'
import './../style/index.css'
import { Carousel  ,Row, Col , Avatar , Divider , Icon ,Tooltip } from 'antd'

function Index(){

    return(
        <>
             <Row type="flex" justify="center" gutter={12}>
                
                 <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                    <div>
                        <Carousel autoplay>
                            <div> <h3>1</h3></div>
                            <div> <h3>2</h3></div>
                            <div> <h3>3</h3></div>
                            <div> <h3>4</h3></div>
                        </Carousel>
                    </div>

                    <div className="main-content">
                        <div className="content-list">
                            <div className="context-item">
                                <Row>
                                    <Col className="con-title" span="24">React Hooks 免费视频教程(更新第11集)</Col>
                                </Row>
                                <Row>
                                    <Col span={12} >
                                        <span className="con-type">视频教程</span> <span className="con-date">|  2019年08月23日</span> 
                                    </Col>
                                    <Col xl={12} lg={12} md={12} sm={0} xs={0} className="con-icon" >
                                        <Row type="flex" justify="end">
                                            <Col span={4}>
                                                <Tooltip title="阅读">
                                                    <Icon type="eye" /> 15550
                                                </Tooltip>
                                            </Col>
                                            <Col span={4}>
                                                <Tooltip title="点赞">
                                                    <Icon type="heart" /> 40
                                                </Tooltip>
                                            </Col>
                                            <Col span={4}>
                                                <Tooltip title="评论">
                                                    <Icon type="file-protect" /> 100
                                                </Tooltip>
                                            </Col>
                                        </Row>
                                       
                                    </Col>
                                </Row>
                                <div className="con-image-div"><img src="https://jspang.com/images/ReactHooks01.png" width="100%"/></div>
                                <div className="con-text">
                                2019年React Hooks是React生态圈里边最火的新特性了。它改变了原始的React类的开发方式，改用了函数形式;它改变了复杂的状态操作形式，让程序员用起来更轻松;它改变了一个状态组件的复用性，让组件的复用性大大增加。如果你是React的粉丝者或者正在使用React开发项目，你可以用1个小时时间看一下这篇文章（视频），你一定会有所收获，并在工作种能熟练的使用React Hooks。目前的大部分Hooks知识点，文章都涉及到。我想想你学完并使用Hooks后，会颠覆你现在的React开发方式，并爱上它。
                                </div>
                                <div className="con-more">
                                    阅读全文>
                                </div>

                            </div>


                            <div className="context-item">
                                <Row>
                                    <Col className="con-title" span="24">50元加入小密圈 胖哥带你学一年</Col>
                                </Row>
                                <Row>
                                    <Col span={12} >
                                        <span className="con-type">视频教程</span> <span className="con-date">|  2019年08月23日</span> 
                                    </Col>
                                    <Col xl={12} lg={12} md={12} sm={0} xs={0} className="con-icon" >
                                        <Row type="flex" justify="end">
                                            <Col span={4}>
                                                <Tooltip title="阅读">
                                                    <Icon type="eye" /> 15550
                                                </Tooltip>
                                            </Col>
                                            <Col span={4}>
                                                <Tooltip title="点赞">
                                                    <Icon type="heart" /> 40
                                                </Tooltip>
                                            </Col>
                                            <Col span={4}>
                                                <Tooltip title="评论">
                                                    <Icon type="file-protect" /> 100
                                                </Tooltip>
                                            </Col>
                                        </Row>
                                       
                                    </Col>
                                </Row>
                                <div className="con-image-div"><img src="https://jspang.com/images/xiaomiquan.png" width="100%"/></div>
                                <div className="con-text">
                                50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。

我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。

我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。
                                </div>
                                <div className="con-more">
                                    阅读全文>
                                </div>

                            </div>
                        </div>
                    </div>
                 </Col>

                 <Col xl={4} lg={4} md={0} sm={0} xs={0} >
                    <div className="top-side">
                        <Avatar size={98} src="http://blogimages.jspang.com/blogtouxiang1.jpg"  />
                        <div className="side-blog-name">技术胖</div>
                        <div className="side-commnet">
                        12年编程经验，头变秃，技能没变强，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                        </div>
                        <Divider>social intercourse</Divider>
                        <Row>
                            <Col span={6}><Avatar size="small" icon="github" /></Col>
                            <Col span={6}><Avatar size="small" icon="wechat" /></Col>
                            <Col span={6}><Avatar size="small" icon="qq" /></Col>
                            <Col span={6}><Avatar size="small" icon="user" /></Col>
                        </Row>
                        <Divider>学习QQ群</Divider>
                        <Row>
                            <Col xxl={12} xl={24} lg={24} md={0} sm={0} xs={0} className="qq_show">
                                <Icon type="qq" /> 1群:364140450
                            </Col>
                            <Col  xxl={12} xl={24} lg={24} md={0} sm={0} xs={0} className="qq_show">
                                <Icon type="qq" /> 2群:524520566
                            </Col>
                            <Col  xxl={12} xl={24} lg={24} md={0} sm={0} xs={0} className="qq_show">
                                <Icon type="qq" /> 3群:159579268
                            </Col>
                            <Col  xxl={12} xl={24} lg={24} md={0} sm={0} xs={0} className="qq_show">
                                <Icon type="qq" />4群:674639629
                            </Col>
                            <Col  xxl={12} xl={24} lg={24} md={0} sm={0} xs={0} className="qq_show">
                                <Icon type="qq" />5群:806799257
                            </Col>
                        </Row>
                    </div>
                 </Col>

             </Row>

            
        </>
    )

}

export default Index;