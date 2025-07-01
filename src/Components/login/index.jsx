import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css'

const Login =()=>{

     const [allValues, setValues] = useState({
          userName : "",
          password : "",
          showErrorMsg : false,
          errorMsg : ""
     })

     const navigate = useNavigate();

     const token = Cookies.get("jwtToken");
     // console.log(token);

     const onSubmitUserDetails= async (e)=>{
          e.preventDefault();

          // console.log("function running");

          const api = "https://apis.ccbp.in/login";

          const userDetails = {
               username : allValues.userName,
               password : allValues.password
          }

          const options = {
               method: "Post",
               body: JSON.stringify(userDetails)
          }

          const response = await fetch(api, options);

          const data = await response.json();
          // console.log(response);
          // console.log(data);

          if(response.ok === true){
               setValues({...allValues, showErrorMsg : false , errorMsg : ""});

               navigate("/");

               Cookies.set("jwtToken", data.jwt_token)

          }
          else{
               setValues({...allValues, showErrorMsg : true, errorMsg : data.error_msg});
          }
     }

     useEffect(()=>{
          if(token !== undefined){
               navigate("/");
          }

     },[])

     return(
          <div className='login-cont'>
               <form onSubmit={onSubmitUserDetails} className='my-form'>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input onChange={(e)=>{setValues({...allValues, userName : e.target.value})}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={(e)=>{setValues({...allValues, password : e.target.value})}} type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary form-control">Submit</button>
                    <br />
                    {allValues.showErrorMsg ? <p className='text-red'>{allValues.errorMsg}</p> : null}
               </form>
          </div>
     )
}


export default Login;