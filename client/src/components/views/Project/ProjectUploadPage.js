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
  const [Skills, setSkills] = useState("")
  const [Tags, setTags] = useState("")
  const [Privacy, setPrivacy] = useState(0)
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

  const handleChangeStartDate = (d, dateString) =>{
    setStartDate(dateString)
  }
  const handleChangeEndDate = (d, dateString) =>{
    setEndDate(dateString)
  }

  const handleChangeSkills = (event) => {
    setSkills(event.currentTarget.value)
  }
  const handleChangeTags = (event) => {
    setTags(event.currentTarget.value)
  }


  const onSubmit = values => {
    console.log(values);
  };

  const handleChangePrivacy = (event) => {
    setPrivacy(event)
  }

  const handleChangeCategory = (event) => {
     setCategories(event)
  }

  return (
    <div className="container">
      <Form onSubmit={onSubmit} className="uploadProject">    
        <div className="input_wrap">
          <label>Title</label>
          <Input 
          onChange={handleChangeTitle}
          value={title}/>
        </div>
        <div className="input_wrap">
          <label>Sub Title</label>
          <Input 
            onChange={handleChangeSubTitle}
            value={subTitle}/>
        </div>
        <div className="input_wrap">
          <label>Date</label>
          <Row gutter={24}>
            <Col span={12}>
            <DatePicker style={{'width': '100%'}}
              onChange={handleChangeStartDate}
              mode="date"
              
              />
            </Col>
            <Col span={12}>
            <DatePicker style={{'width': '100%'}}
              onChange={handleChangeEndDate}
              mode="date"
             
              />
            </Col>
            </Row>
        </div>
        <Row gutter={24}>
          <Col className="input_wrap" span={12}> 
            <label>Category</label>
            <Select onChange={handleChangeCategory} style={{'width' : '100%'}} 
            labelInValue
            defaultValue={{ value: 1 }}>
              {CategoryOptions.map((item, index) => (
                <Option key={index} value={item.value}>{item.label}</Option>
              ))}
            </Select>
          </Col>
          <Col className="input_wrap" span={12}> 
            <label>Privacy</label>
            <Select 
            onChange={handleChangePrivacy} 
            style={{'width' : '100%'}} 
            labelInValue
            defaultValue={{ value: 0 }}>
              {PrivateOptions.map((item, index) => (
                <Option key={index} value={item.value}>{item.label}</Option>
              ))}
            </Select>
          </Col>
        </Row>
        <div className="input_wrap">
          <label>Description</label>
          <TextArea
            onChange={handleChangeDecsription}
            value={Description}>
          </TextArea>
        </div>
        <div className="input_wrap">
          <label>Skills</label>
          <Input
            onChange={handleChangeSkills}
            value={Skills}>
          </Input>
        </div>
        <div className="input_wrap">
          <label>Tags</label>
          <Input
            onChange={handleChangeTags}
            value={Tags}>
          </Input>
        </div>

      

        <Button type="primary" onClick={onSubmit} size="large" >
          Submit
        </Button>

      </Form>
    </div>
  )
}

export default ProjectUploadPage
