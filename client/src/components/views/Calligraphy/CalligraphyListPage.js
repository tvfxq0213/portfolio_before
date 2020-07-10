import React from 'react'
import {Button , Row, Col } from 'antd'
import Item from "./Sections/Item.js";


function CalligraphyListPage() {
  const onHandledOrderBy = (orderBy) =>{
    console.log(orderBy)
  }
  return (
    <div className="container">
      <Row  gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col class="" span={12}>
          <span className="orderby" onClick={onHandledOrderBy('')}>All</span>
          <span className="orderby" onClick={onHandledOrderBy('2')}>회사</span>
          <span className="orderby" onClick={onHandledOrderBy('1')}>개인</span>
        </Col>
        <Col span={12} className="text-right ">
        <Button href="/calligraphyUpload">Upload</Button>
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

export default CalligraphyListPage
