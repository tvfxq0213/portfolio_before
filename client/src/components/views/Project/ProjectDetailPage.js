import React, {useEffect, useState} from 'react'
import { Row, Col , Tag } from 'antd';
import Axios from 'axios';
import DeleteBtn from './Sections/deleteBtn.js';
import moment from 'moment'
import {Link} from 'react-router-dom';


function ProjectDetailPage(props) {

  const projectId = props.match.params.projectId
  const variable = {
    projectId
  }

  const [ProjectDetail, setProjectDetail] = useState([]);
  const [DeleteBtnShow, setDeleteBtnShow] = useState(false);
  const [UpdateBtnShow, setUpdateBtnShow] = useState(false);
  const [Tags, setTags] = useState([]);

  
  useEffect(()=>{
    Axios.post('/api/project/getProjectDetail', variable)
    .then(response => {
        if (response.data.success) {
          console.log(response.data.project)
            setProjectDetail(response.data.project)

            if(response.data.project.writer._id === localStorage.getItem('userId')){ 
              // 작성자와 로그인한 userId가 같아야 삭제 버튼이 나타남
              setDeleteBtnShow(!DeleteBtnShow);              
              setUpdateBtnShow(!UpdateBtnShow);
              setTags(response.data.project.tags.split(','));
            }

        } else {
            alert('Failed to get video Info')
        }
    })
  }, [projectId]) //  props.match.params.videoId가 바뀔때만 재구독한다. 

  const renderTags = Tags.map((tag, index) => {
    return <React.Fragment key={index}>
      <Tag color="geekblue" key={index}>{tag}</Tag>
    </React.Fragment>
  })
  

  return (
    <div className="container">
      {ProjectDetail.thumbnail &&
      <div className="text-center">
        <img src={`http://localhost:5000/${ProjectDetail.thumbnail}`} alt={ProjectDetail.projectTitle}></img>
      </div>
      }
      <h2 className="display-flex align-items-center">
        <span className={ProjectDetail.category === 2 ? 'category personal': 'category company'}>
          {ProjectDetail.category === 2 ? '개인프로젝트': '회사프로젝트'}
        </span>
        {ProjectDetail.projectTitle} 
        
      </h2>
      <h4>{ProjectDetail.projectSubTitle}</h4>
      <p className="datetime">{ProjectDetail.startDate} ~ {ProjectDetail.endDate}</p>
      <p className="skills">{ProjectDetail.skills}</p>
      <div className="contents">
        {ProjectDetail.description}  
      </div>  
      <p> 
        {renderTags}
      </p>


      <div className="btn_wrap my-50 text-right">
      { DeleteBtnShow &&
        <DeleteBtn projectId={projectId} userId={localStorage.getItem('userId')}></DeleteBtn>
      }
      { UpdateBtnShow &&
        <Link to={`/project/update/${projectId}`} className="btn blue ml-5">Update</Link>
      }
        <Link to="/project" className="btn ml-5">List</Link>

      </div>
    </div>
  )
}

export default ProjectDetailPage
