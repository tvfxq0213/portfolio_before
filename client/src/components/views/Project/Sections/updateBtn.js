import React from 'react'
import Axios from 'axios'
import 'antd/dist/antd.css';


function deleteBtn(props) {

  const variable = {
    videoId: props.videoId
  }
  const DeleteVideo = (props) => {
    Axios.post('/api/project/deleteProject', variable)
    .then(response => {
      if( response.data.success) {
        alert('프로젝트가 삭제되었습니다.')
        props.history.push('/')
      }else{
        alert('프로젝트를 삭제하는데 실패했습니다.')
      }
    })

  }
  if(props.userId) { 

    return (
        <>
          <button className="btn blue ml-5"  onClick={DeleteVideo}>Update</button>
        </>
        )
    
  
  }
}

export default deleteBtn
