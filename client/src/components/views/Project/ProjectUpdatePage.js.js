import React, {useState, useEffect} from 'react'
import { Form, Input, DatePicker, Col, Row,  Upload, message , Button, Select } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Dropzone from 'react-dropzone';
import { useSelector } from "react-redux";
import moment from "moment";
import {Link} from 'react-router-dom';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6


import Axios from 'axios';

const {TextArea} = Input;
const {Option} = Select;


const PrivateOptions = [
  { value: 0, label: 'Private' },
  { value: 1, label: 'Public' }
]

const CategoryOptions = [
  { value: 1, label: "회사 프로젝트" },
  { value: 2, label: "개인 프로젝트" },
]
const dateFormat = 'YYYY-MM-DD';



function ProjectUpdatePage(props) {
  const user = useSelector(state => state.user);
  const projectId = props.match.params.projectId
  const variable = {
    projectId
  }

  const [ProjectDetail, setProjectDetail] = useState([]);
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


  useEffect(()=>{
    Axios.post('/api/project/getProjectDetail', variable)
    .then(response => {
        if (response.data.success) {
           const projectDetail = response.data.project;
            setProjectDetail(projectDetail)
            setTitle(projectDetail.projectTitle);
            setSubTitle(projectDetail.projectSubTitle);
            setDescription(projectDetail.description);
            setStartDate(moment(projectDetail.startDate,dateFormat));
            setEndDate(moment(projectDetail.endDate, dateFormat));
            setSkills(projectDetail.skills)
            setTags(projectDetail.tags)
            setFilePath(projectDetail.thumbnail);



            if(response.data.project.writer._id === localStorage.getItem('userId')){ 
              // 작성자와 로그인한 userId가 같아야 삭제 버튼이 나타남
            }

        } else {
            alert('Failed to get video Info')
        }
    })
  }, [projectId]) //  props.match.params.videoId가 바뀔때만 재구독한다. 


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
    setStartDate(moment(d,dateFormat))
  }
  const handleChangeEndDate = (d, dateString) =>{
    setEndDate(moment(d,dateFormat))
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
        projectId,
        data :{
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

    }

    console.log(variables);

    
    Axios.post('/api/project/updateProject', variables)
          .then(response => {
            console.log(response);
              if (response.data.success) {
                  alert('프로젝트가 성공적으로 업로드되었습니다.')
                  setTimeout(()=> {
                    props.history.push('/project')

                  },1000)
              } else {
                  alert('프로젝트업로드를 실패하였습니다. ')
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
              value={startDate}
              />
            </Col>
            <Col span={12}>
            <DatePicker style={{'width': '100%'}}
              onChange={handleChangeEndDate}
              mode="date"
              value={endDate}


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
          <Link to="/project" className="btn ">List</Link>
          <button type="button" onClick={onSubmit} className="btn green ml-5" >
            Update
          </button>
        </div>

      </Form>
    </div>
  )
}

export default ProjectUpdatePage
