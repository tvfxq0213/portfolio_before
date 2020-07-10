import React from 'react'
import {Button, Select, Tag, Col, Row} from 'antd';
import Item from "./Sections/Item.js";


function ProjectListPage(props) {
  const onHandledCategory = (category) =>{
    console.log(category)
  }
  return (
    <div className="container">
      <Row  gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col class="" span={12}>
          <span className="CategoryTab" onClick={onHandledCategory('')}>All</span>
          <span className="CategoryTab" onClick={onHandledCategory('2')}>회사</span>
          <span className="CategoryTab" onClick={onHandledCategory('1')}>개인</span>
        </Col>
        <Col span={12} className="text-right ">
          <Button href="/projectUpload">Upload</Button>
        </Col>
      </Row>
      <div className="ListWrap">
        <Row  gutter={{ xs: 8, sm: 16, md: 24 }}>
          <Col span={6}>
            <Item category={1}/>
          </Col>
          <Col span={6}>
            <Item category={2}/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProjectListPage
