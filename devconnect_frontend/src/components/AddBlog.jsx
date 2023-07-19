import React from 'react'
import { useFormik } from 'formik'
import Swal from 'sweetalert2';


const AddBlog = () => {

  const addblogForm = useFormik({
    title: {
     description : '',
     image : '',
     user : '' 
      
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/blog/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Email or Password is incorrect'
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


  return (
    <div>AddBlog
      <form onSubmit={addblogForm.handleSubmit}>

        <label htmlFor="title">Title</label>
        <span style={{ color: 'red', fontSize: 15, marginLeft: 10 }}>{addblogForm.touched.title && addblogForm.errors.title}</span>
        <input className="form-control mb-3" onChange={addblogForm.handleChange} value={addblogForm.values.title} title="title" />

        <label htmlFor="description">Description</label>
        <span style={{ color: 'red', fontSize: 15, marginLeft: 10 }}>{addblogForm.touched.description && addblogForm.errors.description}</span>
        <input className="form-control mb-3" onChange={addblogForm.handleChange} value={addblogForm.values.description} description="description" />

        <label htmlFor="image">Image</label>
        <span style={{ color: 'red', fontSize: 15, marginLeft: 10 }}>{addblogForm.touched.image && addblogForm.errors.image}</span>
        <input className="form-control mb-3" onChange={addblogForm.handleChange} value={addblogForm.values.image} image="image" />

      
        <label htmlFor="createat">CreatedAt</label>
        <span style={{ color: 'red', fontSize: 15, marginLeft: 10 }}>{addblogForm.touched.createdat && addblogForm.errors.createdat}</span>
        <input className="form-control mb-3" onChange={addblogForm.handleChange} value={addblogForm.values.createdat} createdat="createdat" />

        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>




  )
}

export default AddBlog
