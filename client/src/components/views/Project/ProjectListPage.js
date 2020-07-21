import React, {useEffect, useState} from 'react'
import { Col, Row} from 'antd';
import {Link} from 'react-router-dom';
import Item from "./Sections/Item.js";
import Axios from "axios"


function ProjectListPage(props) {

  const [CurrentPage, setCurrentPage] = useState(0);
  const [Project, setProject] = useState([]);
  const [category, setCategory] = useState(0);

  const LoadMoreItems = () => {
    const endpoint = `/api/project/getProjects`;
    const param = {
      category,
      CurrentPage: CurrentPage+1
    }
    AxiosProject(endpoint,param);

  }


    const AxiosProject = (endpoint,param) => {
      Axios.get(endpoint, {
        params: param
      })
      .then(response => {
          if(response.data.success){
              console.log(response.data.projects)
              console.log(category)
              setProject([...Project, ...response.data.projects])
              setCurrentPage(param.CurrentPage)

          }else{
              alert("비디오 가져오기를 실패 했습니다.");
          }
      })

    }
  useEffect(() => {
    const endpoint = `/api/project/getProjects`;
    const param = {
      category,
      CurrentPage
    }
    AxiosProject(endpoint,param);
     
  }, [category])

  const handleChangeOrderBy = () =>{

  }




  function onHandledCategory(event){
    console.log(event.target.dataset.category);
    setCategory(event.target.dataset.category)
  }

  const renderProject = Project.map((project, index) =>{
      return <Col lg={6} md={12} xs={24} key={index}>
        <Item Project={project}/>
      </Col>
  });
  


  return (
    <div className="container">
      <Row  gutter={24}>
        <Col className="" span={8}>
          <span className="CategoryTab" data-category="0" onClick={onHandledCategory}>All</span>
          <span className="CategoryTab" data-category="1" onClick={onHandledCategory}>회사</span>
          <span className="CategoryTab" data-category="2" onClick={onHandledCategory}>개인</span>
        </Col>
        <Col className="" span={8}>
          <select id="orderby" onChange={handleChangeOrderBy}>
            <option value="latest">최신순</option>
            <option value="name">이름순</option>
          </select>
        </Col>
        <Col className="" span={8} className="text-right ">
          <Link to="/projectUpload" className="btn">Upload</Link>
        </Col>
      </Row>
      <div className="ListWrap">
        <Row  gutter={24}>
          {renderProject}
        </Row>
        <div className="display-flex align-items-center justify-content-center">
          <span className="btn" onClick={LoadMoreItems}>More</span>

        </div>
      </div>
    </div>
  )
}

export default ProjectListPage
