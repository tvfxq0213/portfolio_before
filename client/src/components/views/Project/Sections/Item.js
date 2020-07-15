import React from 'react'
import {Tag} from 'antd'
import {Link} from 'react-router-dom';
import moment from 'moment';
import { urlencoded } from 'body-parser';


function Item(props) {
  const project = props.Project;
  const tags = project.tags.split(',');


  return (
    <div className="item">
      <Link to={`/project/${project._id}`}>
        <span className={project.category == 2 ? 'category personal': 'category company'}>
          {project.category == 2 ? '개인프로젝트': '회사프로젝트'}
        </span>
  
        <img className="thumbnail" src={`http://localhost:5000/${project.thumbnail}`} ></img>
        <h3>
          {project.projectTitle}
        </h3>
        <p>{project.projectSubTitle}</p>
        <p className="date">{moment(project.startDate).format('YYYY-MM-DD')} ~ {moment(project.endDate).format('YYYY-MM-DD')}</p>
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
