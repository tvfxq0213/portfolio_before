import React, {useState, useEffect} from 'react'
import { Form, Input, DatePicker, Col, Row, InputNumber, Button, Select } from 'antd';
import { useSelector } from "react-redux";


import Axios from 'axios';

const {TextArea} = Input;
const {Option} = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const PrivateOptions = [
  { value: 0, label: 'Private' },
  { value: 1, label: 'Public' }
]

const CategoryOptions = [
  { value: 1, label: "회사 프로젝트" },
  { value: 2, label: "개인 프로젝트" },
]
function ProjectUploadPage(props) {
  const user = useSelector(state => state.user);

  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [privacy, setPrivacy] = useState(0)
  const [Categories, setCategories] = useState(1)
  const [ThumbnailPath, setThumbnailPath] = useState("")


  const handleChangeTitle = (event) => {
      setTitle(event.currentTarget.value)
  }
  const handleChangeSubTitle = (event) => {
    setSubTitle(event.currentTarget.value)
  }
  const handleChangeDecsription = (event) => {
      setDescription(event.currentTarget.value)
  }

  const handleChangeStartDate = (event) =>{
    setStartDate(event.currentTarget.value)
  }
  const handleChangeEndDate = (event) =>{
    setEndDate(event.currentTarget.value)
  }

  const onSubmit = values => {
    console.log(values);
  };

  const handleChangeOne = (event) => {
    setPrivacy(event.currentTarget.value)
  }

  const handleChangeTwo = (event) => {
      setCategories(event.currentTarget.value)
  }

  return (
    <div className="container">
      <Form onSubmit={onSubmit} className="uploadProject">    
        <div>
          <label>Title</label>
          <Input 
          onChange={handleChangeTitle}
          value={title}/>
        </div>
        <div>
          <label>Sub Title</label>
          <Input 
            onChange={handleChangeSubTitle}
            value={subTitle}/>
        </div>
        <div>
          <label>Date</label>
          <Row>
            <Col span={12}>
            <DatePicker 
              onChange={handleChangeStartDate}
              value={startDate}/>
            </Col>
            <Col span={12}>
            <DatePicker 
              onChange={handleChangeEndDate}
              value={endDate}/>
            </Col>
            </Row>
        </div>
        <div>
          <label>Category</label>
              <Select onChange={handleChangeTwo}>
                {CategoryOptions.map((item, index) => (
                  <Option key={index} value={item.value}>{item.label}</Option>
                ))}
              </Select>
        </div>
        <div>
          <label>Description</label>
          <TextArea
            onChange={handleChangeDecsription}
            value={Description}>
          </TextArea>
        </div>

        <Select onChange={handleChangeOne}>
          {PrivateOptions.map((item, index) => (
            <Option key={index} value={item.value}>{item.label}</Option>
          ))}
        </Select>
        <br/>
        <br/>

       
        <br/>
        <br/>

        <Button type="primary" onClick={onSubmit} size="large" >
          Submit
        </Button>

      </Form>
    </div>
  )
}

export default ProjectUploadPage
