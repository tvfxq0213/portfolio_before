import React from 'react'
import {Tag} from 'antd'

function Item(props) {

  return (
    <div className="item">
      <a href="/calligraphy/12">
        <img className="thumbnail" src="" alt="thumbnail" title="thumbnail"/>
        <h3>
          Title
        </h3>
        <div className="tag_wrap">
          <Tag color="geekblue">HTML</Tag> 
          <Tag color="geekblue">CSS</Tag>          
          
        </div>
      </a>
    </div>
  )
}

export default Item
