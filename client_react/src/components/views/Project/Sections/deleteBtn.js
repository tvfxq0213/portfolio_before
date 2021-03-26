import React from 'react'
import Axios from 'axios'
import { withRouter} from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';


function deleteBtn(props) {

  const variable = {
    projectId: props.projectId
  }
  const DeleteVideo = () => {
    Axios.post('/api/project/deleteProject', variable)
    .then(response => {
      if( response.data.success) {
        console.log(response.data)
        alert('프로젝트가 삭제되었습니다.')
        props.history.push('/project')
      }else{
        alert('프로젝트를 삭제하는데 실패했습니다.')
      }
    })

  }
  if(props.userId) { 

    return (
        <>
          <Button type="primary" className="btn red" onClick={DeleteVideo}>Delete</Button>
        </>
        )
    
  
  }
}

export default withRouter(deleteBtn)
