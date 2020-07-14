import React from 'react'
import Axios from 'axios'
import 'antd/dist/antd.css';


function UpdateBtn(props) {

  const variable = {
    projectId: props.projectId
  }
  const UpdateVideo = () => {
    Axios.post('/api/project/updateProject', variable)
    .then(response => {
      if( response.data.success) {
        alert('내용이 업데이트 되었습니다.')
        props.history.push('/')
      }else{
        alert('프로젝트를 업데이트 하는데 실패했습니다.')
      }
    })

  }
  if(props.userId) { 

    return (
        <>
          <button className="btn blue ml-5"  onClick={UpdateVideo}>Update</button>
        </>
        )
    
  
  }
}

export default UpdateBtn
