import React from 'react'
import {Row, Col, Timeline} from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons';

function AboutPage() {
  return (
    <div className="container">
      <section className="section01">
        <h3 className="title">Profile</h3>
        1992.02.13 여자
        Web FrontEnd Developer
        광주동신여자고등학교 졸업
        고려대학교 컴퓨터정보학과 졸업
      </section>
      <section className="section02">
        <h3 className="title">
           Skills
        </h3>
        <div className="">
          HTML5, CSS3, SCSS, JavaScript(ES6+), React.js, Vue.js, jQuery, Ext.js<br/>
          node.js(express), PHP(Laravel), Ruby(ruby on rails), JAVA(spring)<br/>
          MYSQL, MongoDB
        </div>
      </section>
      <section className="section03">
        <h3 className="title">
          Careers/Project
        </h3>
        <Timeline mode="alternate">
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px', color: 'gray' }} />}>2014.07 ~ 2015.08 <br/>원용크레비즈</Timeline.Item>
          <Timeline.Item >Florista</Timeline.Item>
          <Timeline.Item color="gray">1204 design</Timeline.Item>
          <Timeline.Item color="gray">1204 design Internet</Timeline.Item>
          <Timeline.Item color="gray">Wonyoung Crebiz</Timeline.Item>
          <Timeline.Item color="gray">Waiternara Renewal</Timeline.Item>
          <Timeline.Item color="gray">Youngupnara Renewal</Timeline.Item>
          <Timeline.Item color="gray">Youngupnara Blog(서비스중단)</Timeline.Item>

          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' , color:'gray'}} />}>
            2015.11 ~ 2017.04 <br/>
            LexCode / eQQui
          </Timeline.Item>
          <Timeline.Item color="orange" >eQQui</Timeline.Item>
          <Timeline.Item color="gray">eQQui Admin</Timeline.Item>
          <Timeline.Item color="gray" >Lexcode Homepage</Timeline.Item>
          <Timeline.Item color="orange">BIS@T</Timeline.Item>
          <Timeline.Item  dot={<ClockCircleOutlined style={{ fontSize: '16px' , color :'gray'}} />}>
            2017.09 ~ 2020.03 <br/>
            스타쉽벤딩머신
          </Timeline.Item>
          <Timeline.Item color="purple" >PUFF</Timeline.Item>
          <Timeline.Item color="gray">PUFF Admin V1</Timeline.Item>
          <Timeline.Item color="gray">PUFF GAME </Timeline.Item>
          <Timeline.Item color="gray">PUFF Admin V2</Timeline.Item>
          <Timeline.Item color="purple" >PUFF Studio</Timeline.Item>
          <Timeline.Item color="gray" >PUFF PaymentWebview</Timeline.Item>
          <Timeline.Item color="gray" >PUFF Ad Admin(서비스 중단)</Timeline.Item>
          <Timeline.Item color="gray" >Studio PUFF(서비스 중단)</Timeline.Item>
          <Timeline.Item color="gray" >PUFF WebRTC(서비스 중단)</Timeline.Item>


        </Timeline>
      </section>
      <section className="section04">
        <h3 className="title">
          Contact Me
        </h3>

      </section>
      


      
    </div>
  )
}

export default AboutPage
