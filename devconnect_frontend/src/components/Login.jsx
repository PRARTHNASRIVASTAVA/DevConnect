import { useFormik } from 'formik'
import React from 'react'
import Swal from 'sweetalert2';
import * as Yup from 'yup';
// import { link } from '../../../backend/routers/blogRouter';
const loginSchema = Yup.object().shape({
  
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required(' Password is Required')
});

const Login = () => {
  const loginForm = useFormik({
    initialValues:{
      email:'',
      password :''
    },
    onSubmit : async (values) => {
      console.log(values);
      // add code here to connect to backend
      const res = await fetch('http://localhost:3000/user/authenticate' ,{
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type' : 'application/json'}
      });

console.log(res.status);

if(res.status === 200){
  Swal.fire({
    icon : 'error',
    title : 'Login Failed',
    text : 'Email or Password is incorrect'
  })
}else{
  Swal.fire({
    icon: 'error',
    title: 'error',
    text: 'Something went wrong'
  })
}

    },
    validationSchema: loginSchema
  });
  return (
    <>    
    <div className='d-flex justify-content-center align-items-center vh-100'>
      
       <div class="card w-25 shadow mt-5">
        <div class="card-body p-5">
            <img style={{width: 60}} class="d-block m-auto"
                src="http://www.logomaven.com/blog/wp-content/uploads/2016/01/Bloglogo1-744x1030.png" alt=""/>
            {/* <h3 class="text-center my-3">Blog</h3> */}
            <form onSubmit={loginForm.handleSubmit}>
              

            <label for="email">Email</label>
            <span style = {{color:'red',fontSize:15,marginLeft:10}}>{loginForm.touched.email && loginForm.errors.email}</span>

            <input class="form-control mt-3"  id="email" onChange={loginForm.handleChange} value={loginForm.values.email} name="email"/>

            <label for="password">Password</label>
            <span style = {{color:'red',fontSize:15,marginLeft:10}}>{loginForm.errors.password}</span>

            <input class="form-control mt-3" type="password" id="password"  onChange={loginForm.handleChange} value={loginForm.values.password} name="password" />

            <button type="submit" className="btn btn-danger w-100 mt-5">Login</button>
            </form>
        </div>

    </div>

    </div>
    </>

  )
}

export default Login