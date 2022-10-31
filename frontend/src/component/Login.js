import React from "react"
import { Formik } from "formik"
import Swal from "sweetalert2";

const Login = () => {

  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata)
    resetForm();

    const response = await fetch('http://localhost:5000/user/authenticate', {
      method: 'POST',
      body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
    })

    if(response.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'Logedin'
      })

      const data = await response.json();
      sessionStorage.setItem('user', JSON.stringify(data));


    }else if((response.status === 401)){
      Swal.fire({
        icon : 'error',
        title : 'Login Failed'
      })
    }else{
      console.log('unknown error ocuured');
    }

    // data to store in database
  }

  return (
    <div style={{ backgroundColor: "#eee", height: "100vh" }}>
      <div className="col-md-6 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={loginSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-center">Signup Here</h3>

                 

                  <label>Email</label>
                  <input type="email" className="form-control mb-3" name="email" onChange={handleChange} value={values.email} />

                  <label>Password</label>
                  <input type="password" className="form-control mb-3" name="password" onChange={handleChange} value={values.password} />

                  <button type="submit" className="btn btn-primary mt-5">Submit</button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
