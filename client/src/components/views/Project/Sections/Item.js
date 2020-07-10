import React from 'react'
import {Tag} from 'antd'

function Item(props) {

  return (
    <div className="item">
      <a href="/project/12">

        <span className={props.category==2 ? 'category personal': 'category company'}>{props.category==2 ? '개인프로젝트': '회사프로젝트'}</span>
        <img className="thumbnail" src="" alt="thumbnail" title="thumbnail"/>
        <h3>
          Title
        </h3>
        <p>subTitle</p>
        <p className="date">2017.08.07~ 2019.01.28</p>
        <div className="tag_wrap">
          <Tag color="geekblue">HTML</Tag> 
          <Tag color="geekblue">CSS</Tag>          
          
        </div>
      </a>
    </div>
  )
}

export default Item
