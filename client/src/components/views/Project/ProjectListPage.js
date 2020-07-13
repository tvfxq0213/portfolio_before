import React, {useEffect, useState} from 'react'
import {Button, Select, Tag, Col, Row} from 'antd';
import Item from "./Sections/Item.js";
import Axios from "axios"

function ProjectListPage(props) {
  

  const [Video, setVideo] = useState([]);
  const [category, setCategory] = useState(0)

  useEffect(() => {

      Axios.get('/api/project/getProjects')
      .then(response => {
          if(response.data.success){
              console.log(response.data.projects)
              setVideo(response.data.projects)
          }else{
              alert("비디오 가져오기를 실패 했습니다.");
          }
      })
     
  }, [])

  const onHandledCategory = (event) =>{
    console.log(event)
    console.log(event.target.category)
   // setCategory(event.target.data["category"])
  }

  return (
    <div className="container">
      <Row  gutter={24}>
        <Col className="" span={12}>
          <span className="CategoryTab" category="0" onClick={onHandledCategory}>All</span>
          <span className="CategoryTab" category="1" onClick={onHandledCategory}>회사</span>
          <span className="CategoryTab" category="2" onClick={onHandledCategory}>개인</span>
        </Col>
        <Col className="" span={12} className="text-right ">
          <Button href="/projectUpload">Upload</Button>
        </Col>
      </Row>
      <div className="ListWrap">
        <Row  gutter={24}>
          <Col className="" xs={24} sm={12} md={6}>
            <Item category={1}/>
          </Col>
          <Col className="" xs={24} sm={12} md={6}>
            <Item category={2}/>
          </Col>
          <Col className="" xs={24} sm={12} md={6}>
            <Item category={1}/>
          </Col>
          <Col className="" xs={24} sm={12} md={6}>
            <Item category={2}/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProjectListPage
