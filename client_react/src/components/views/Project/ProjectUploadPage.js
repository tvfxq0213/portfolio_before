import React, {useState, useEffect} from 'react'
import { Form, Input, DatePicker, Col, Row, Select } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Dropzone from 'react-dropzone';
import { useSelector } from "react-redux";
import Axios from 'axios';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

const {Option} = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const PrivateOptions = [
  { value: 0, label: 'Private' },
  { value: 1, label: 'Public' }
]
const dateFormat = 'YYYY-MM-DD';
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
  const [FilePath, setFilePath] = useState("")


  const handleChangeTitle = (event) => {
      setTitle(event.currentTarget.value)
  }
  const handleChangeSubTitle = (event) => {
      setSubTitle(event.currentTarget.value)
  }
 
  const handleChangeDecsription = (value) => {
    setDescription(value)
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

  const onDrop = (files) => {

    let formData = new FormData();
    const config = {
        header: { 'content-type': 'multipart/form-data' }
    }
    formData.append("file", files[0])

    Axios.post('/api/project/uploadfiles', formData, config)
        .then(response => {
            if (response.data.success) {
                let variable = {
                    filePath: response.data.url,
                    fileName: response.data.fileName
                }
                setFilePath(response.data.url)

            } else {
                alert('failed to save the video in server')
            }
        })

}


  const onSubmit = (event) => {
    event.preventDefault();

    if (user.userData && !user.userData.isAuth) {
      return alert('Please Log in First')
  }

  if (title === "" || Description === "" ||
      Categories === "" || subTitle === "" ||
      startDate === "" || endDate === "" ||
      Skills === "" || Privacy === "" ||
      Tags === "" ) {
      return alert('Please first fill all the fields')
  }

    const variables = {
        writer: user.userData._id,
        projectTitle: title,
        projectSubTitle: subTitle,
        description: Description,
        skills: Skills,
        startDate: startDate,
        endDate: endDate,
        privacy: Privacy,
        category: Categories,
        tags: Tags,
        thumbnail: FilePath

    }

    console.log(variables);

    Axios.post('/api/project/uploadProject', variables)
          .then(response => {
            console.log(response);
              if (response.data.success) {
                  alert('프로젝트가 성공적으로 업로드되었습니다.')
                  setTimeout(()=> {
                    props.history.push('/project')

                  },3000)
              } else {
                  alert('Failed to upload video')
              }
          })

  };

  const handleChangePrivacy = (event) => {
    setPrivacy(event.value)
  }

  const handleChangeCategory = (event) => {
     setCategories(event.value)
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
          <ReactQuill value={Description}
          onChange={handleChangeDecsription} />
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

        <div className="input_wrap">
          <label>Thumbnail Image Upload</label>
          <div className="thumbnail_wrap" >

          <Dropzone
            onDrop={onDrop}
            multiple={false} maxSize={800000000}>
            {({ getRootProps, getInputProps }) => (
                <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    {...getRootProps()}
                >
                    <input {...getInputProps()} />
                    <PlusOutlined style={{ fontSize: '3rem' }} />

                </div>
            )}
          </Dropzone>
          {FilePath !== "" &&
            <div>
              <img src={`http://localhost:5000/${FilePath}`} alt="haha" />
            </div>
          }
          </div>
        </div>

      
        <div className="btn_wrap my-50 text-center">
          <button type="button" onClick={onSubmit} className="btn blue">
            Submit
          </button>
        </div>

      </Form>
    </div>
  )
}

export default ProjectUploadPage
