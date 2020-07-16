import React, {useEffect, useState} from 'react'
import { Row, Col , Tag } from 'antd';
import Axios from 'axios';
import DeleteBtn from './Sections/deleteBtn.js';
import moment from 'moment'
import {Link} from 'react-router-dom';


function CalligraphyDetailPage(props) {

  const projectId = props.match.params.calligraphyId
  const variable = {
    projectId
  }

  const [ProjectDetail, setProjectDetail] = useState([]);
  const [DeleteBtnShow, setDeleteBtnShow] = useState(false);
  const [UpdateBtnShow, setUpdateBtnShow] = useState(false);

  
  useEffect(()=>{
    Axios.post('/api/calligraphy/getProjectDetail', variable)
    .then(response => {
        if (response.data.success) {
          console.log(response.data.project)
            setProjectDetail(response.data.project)

            if(response.data.project.writer._id === localStorage.getItem('userId')){ 
              // 작성자와 로그인한 userId가 같아야 삭제 버튼이 나타남
              setDeleteBtnShow(!DeleteBtnShow);              
              setUpdateBtnShow(!UpdateBtnShow);
            }

        } else {
            alert('Failed to get video Info')
        }
    })
  }, [projectId]) //  props.match.params.videoId가 바뀔때만 재구독한다. 

 

  return (
    <div className="container DetailPageWrap">
      {ProjectDetail.thumbnail &&
      <div className="text-center">
        <img src={`http://localhost:5000/${ProjectDetail.thumbnail}`} alt={ProjectDetail.projectTitle}></img>
      </div>
      }
      <h2 className="display-flex align-items-center">

        {ProjectDetail.projectTitle} 
        
      </h2>
      <div className="contents" dangerouslySetInnerHTML={ {__html: ProjectDetail.description}}>
      </div>  



      <div className="btn_wrap my-50 text-right">
      { DeleteBtnShow &&
        <DeleteBtn projectId={projectId} userId={localStorage.getItem('userId')}></DeleteBtn>
      }
      { UpdateBtnShow &&
        <Link to={`/calligraphy/update/${projectId}`} className="btn blue ml-5">Update</Link>
      }
        <Link to="/calligraphy" className="btn ml-5">List</Link>

      </div>
    </div>
  )
}

export default CalligraphyDetailPage
