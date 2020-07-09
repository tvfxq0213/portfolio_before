import React, {useState, useEffect} from 'react'
import { Form, Input, InputNumber, Button } from 'antd';
import { useSelector } from "react-redux";


import Axios from 'axios';

const {TextArea} = Input;

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
  const [Description, setDescription] = useState("");
  const [privacy, setPrivacy] = useState(0)
  const [Categories, setCategories] = useState("Film & Animation")
  const [FilePath, setFilePath] = useState("")
  const [Duration, setDuration] = useState("")
  const [ThumbnailPath, setThumbnailPath] = useState("")


  const handleChangeTitle = (event) => {
      setTitle(event.currentTarget.value)
  }

  const handleChangeDecsription = (event) => {
      setDescription(event.currentTarget.value)
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
  const onDrop = (files) => {

    let formData = new FormData();
    const config = {
        header: { 'content-type': 'multipart/form-data' }
    }
    formData.append("file", files[0])

    Axios.post('/api/video/uploadfiles', formData, config)
        .then(response => {
            if (response.data.success) {
                let variable = {
                    filePath: response.data.url,
                    fileName: response.data.fileName
                }
                setFilePath(response.data.url)

                //gerenate thumbnail with this filepath ! 

                Axios.post('/api/video/thumbnail', variable)
                    .then(response => {
                      console.log(response.data);
                        if (response.data.success) {
                          console.log(response.data);
                            setDuration(response.data.fileDuration)
                            setThumbnailPath(response.data.thumbsFilePath)
                        } else {
                            alert('Failed to make the thumbnails');
                        }
                    })


            } else {
                alert('failed to save the video in server')
            }
        })

}
  
  return (
    <div className="container">
      ProjectUploadPage
      <Form onSubmit={onSubmit}>    
        <label>Title</label>
        <Input 
        onChange={handleChangeTitle}
        value={title}/>

        <br/>
        <br/>
        <label>Description</label>
        <TextArea
          onChange={handleChangeDecsription}
          value={Description}>

        </TextArea>
        <br/>
        <br/>
        <select onChange={handleChangeOne}>
          {PrivateOptions.map((item, index) => (
            <option key={index} value={item.value}>{item.label}</option>
          ))}
        </select>
        <br/>
        <br/>

        <select onChange={handleChangeTwo}>
          {CategoryOptions.map((item, index) => (
            <option key={index} value={item.value}>{item.label}</option>
          ))}
        </select>
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
