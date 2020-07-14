import React, {useEffect, useState} from 'react'
import { Col, Row} from 'antd';
import {Link} from 'react-router-dom';
import Item from "./Sections/Item.js";
import Axios from "axios"

function ProjectListPage(props) {
  

  const [Project, setProject] = useState([]);
  const [category, setCategory] = useState(0)

  useEffect(() => {

      Axios.get('/api/project/getProjects')
      .then(response => {
          if(response.data.success){
              console.log(response.data.projects)
              setProject(response.data.projects)
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

  const renderProject = Project.map((project, index) =>{
      return <Col lg={6} md={12} xs={24} key={index}>
        <Item Project={project}/>
      
      </Col>
  });
  


  return (
    <div className="container">
      <Row  gutter={24}>
        <Col className="" span={12}>
          <span className="CategoryTab" category="0" onClick={onHandledCategory}>All</span>
          <span className="CategoryTab" category="1" onClick={onHandledCategory}>회사</span>
          <span className="CategoryTab" category="2" onClick={onHandledCategory}>개인</span>
        </Col>
        <Col className="" span={12} className="text-right ">
          <Link to="/projectUpload" className="btn">Upload</Link>
        </Col>
      </Row>
      <div className="ListWrap">
        <Row  gutter={24}>
          {renderProject}
        </Row>
      </div>
    </div>
  )
}

export default ProjectListPage
