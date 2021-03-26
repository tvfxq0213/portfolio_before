
import React from 'react'
import {Tag} from 'antd'
import {Link} from 'react-router-dom';


function Item(props) {
  const project = props.Project;
  
  const tags = project.tags ? project.tags.split(',') : [];


  return (
    <div className="item">
      <Link to={`/calligraphy/${project._id}`}>
        
  
        <img className="thumbnail" src={`http://localhost:5000/${project.thumbnail}`} ></img>
        <h3>
          {project.projectTitle}
        </h3>
        <div className="tag_wrap">
        {tags.map((tag, index) => {
            return <Tag color="geekblue" key={index}>{tag}</Tag>
          })
          }
        </div>
      </Link>
      
    </div>
  )
}

export default Item
