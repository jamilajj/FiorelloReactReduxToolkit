import React, { useState } from 'react'
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import PageContainer from '../containers/PageContainer';
function Register () {

    const navigate = useNavigate();
    const url = "https://localhost:7178";


    const [fullname, setFullname] = useState();
    const [username, setUsername] = useState();
    const [mail, setMail] = useState();
    const [password, setPassword] = useState();
  

    async function register(e) {
        e.preventDefault();
        await axios
          .post(
            `${url}/api/Account/SignUp`,
            {
              email: mail,
              password: password,
              fullname: fullname,
              username: username,
            },
            { "Content-Type": "multipart/form-data" }
          )
          .then(function (response) {
            if(response.data.statusMessage = "Failed"){
              Swal.fire({
                position: "top-end",
                icon: "error",            
                text: response.data.errors,
                showConfirmButton: true,
               
              });
            }
            if(response.data.statusMessage = "Succes"){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You registered succesfully",
                showConfirmButton: false,
                timer: 1500,
              });
              console.log(response);
              navigate("/login");
            }      
          
           
          })
          .catch(function (error) {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Something went wrong",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
      return (
        <>
        {/* <PageContainer>
        <section
            id="register-area"
            style={{
              backgroundImage: "url(/images/Register-image.jpg)",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12  col-sm-12">
                  <div className="main">
                    <div className="box">
                      <div className="form">
                        <h2>Register</h2>
                        <form onSubmit={(e) => register(e)}>
                          <div className="inputBox">
                            <input
                              type="text"
                              required="required"
                              onChange={(e) => setFullname(e.target.value)}
                            />
                            <p>Fullname *</p>
                            <i />
                          </div>
                          <div className="inputBox">
                            <input
                              type="text"
                              required="required"
                              onChange={(e) => setUsername(e.target.value)}
                            />
                            <p>Username *</p>
                            <i />
                          </div>
                          <div className="inputBox">
                            <input
                              type="text"
                              required="required"
                              onChange={(e) => setMail(e.target.value)}
                            />
                            <p>Email *</p>
                            <i />
                          </div>
                          <div className="inputBox">
                            <input
                              type="password"
                              required="required"
                              id="passwordId"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <p>Password *</p>
                            <i />
                          </div>
                       
                      
                          <input type="submit" defaultValue="Sign up" style={{marginTop :"27px"}} />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </PageContainer> */}
        <PageContainer>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"onSubmit={(e) => register(e)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  required="required"
                  onChange={(e) => setMail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                   UserName
              </label>
              <div className="mt-2">
                <input
                 type="text"
                 required="required"
                 onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                   FullName
              </label>
              <div className="mt-2">
                <input
                     type="text"
                     required="required"
                     onChange={(e) => setFullname(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
       

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                type="password"
                required="required"
                id="passwordId"
                onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button 
               defaultValue="Sign up"
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          
          
          
          
            
        
        </div>
      </div>
      
        </PageContainer> 
        
        </>
        
      )
}

export default Register