import React, { useState } from 'react'
import { useFormik } from 'formik'
import Swal from 'sweetalert2';
import MDEditor from '@uiw/react-md-editor';

const AddBlog = () => {

  const [value, setValue] = useState('');
  const [selFile, setSelFile] = useState('');

  const addblogForm = useFormik({
    initialValues: {
      title: '',
     description : '',
     image : '',
     user : '' ,
     data: ''
    },
    onSubmit: async (values) => {
      values.image = selFile;
      values.data = value;
      console.log(values);
      const res = await fetch('http://localhost:8000/blog/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Blog Published'
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: 'Something went wrong'
        })
      }

    },
    // validationSchema: addblogSchema
  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    setSelFile(file.name);
    fd.append("myfile", file);
    fetch("http://localhost:8000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };


  return (
    <div className='container mt-5'>
      <form onSubmit={addblogForm.handleSubmit}>

        <label htmlFor="title" className='fs-4'>Title</label>
        <span style={{ color: 'red', fontSize: 20, marginLeft: 10 }}>{addblogForm.touched.title && addblogForm.errors.title}</span>
        <input className="form-control mb-3" onChange={addblogForm.handleChange} value={addblogForm.values.title} id="title" />

        <label htmlFor="description" className='fs-4'>Description</label>
        <span style={{ color: 'red', fontSize: 12, marginLeft: 10 }}>{addblogForm.touched.description && addblogForm.errors.description}</span>
        <input className="form-control mb-3" onChange={addblogForm.handleChange} value={addblogForm.values.description} id="description" />

        <label htmlFor="image" className='fs-4'>Image</label>
        <input className="form-control mb-3" onChange={uploadFile}  type='file' />

      
        <label className='fs-4'>Content</label>
        <MDEditor
        value={value}
        onChange={setValue}
      />

        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>




  )
}

export default AddBlog
