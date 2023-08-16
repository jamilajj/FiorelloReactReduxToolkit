import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router'
import Swal from "sweetalert2";
import PageContainer from '../containers/PageContainer';
function Login() {
    const navigate = useNavigate();
    const url = "https://localhost:7178";

    const [email, setEmail] = useState();
    const [logpassword, setLogpassword] = useState();
    async function login(e) {
        e.preventDefault();

        await axios.post(`${url}/api/Account/SignIn`,
            {
                Email: email,
                Password: logpassword,
            })
            .then(function (response) {
                if (response.data.status === "success" || response.status === 200) {
                    localStorage.setItem("token", JSON.stringify(response.data));
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Signed in succesfully!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate("/");
                } else {
                    Swal.fire({
                        position: "top-center",
                        icon: "error",
                        title: "Email or password is wrong!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                console.log(response);
            })
            .catch(function (error) { });
    };
    return (
    
        <>
    
        <section
        id="login-area"
      // style={{ backgroundImage: "url(/images/login-image.jpg)" }}
      >
        <PageContainer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <div className="main">
                <div className="box">
                  <div className="form">
                    <h2>Login</h2>
                    <form onSubmit={(e) => login(e)}>
                      <div className="inputBox">
                        <input
                          type="email"
                          required="required"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>Enter your Email *</p>
                        <i />
                      </div>
                      <div className="inputBox">
                        <input
                          type="password"
                          required="required"
                          id="passwordId"
                          onChange={(e) => setLogpassword(e.target.value)}
                        />
                        <p>Enter your Password</p>
                        <i />
                      </div>
                      <div className="links">
                        <a href="">Forgot Password ?</a>
                        <div className="show">
                          <input type="checkbox" id="checkId" />
                          <a href="">Show Password</a>
                        </div>
                      </div>
                      <input type="submit" defaultValue="Sign in" />
                    </form>
                    <div>
                    <li className='hover:text-red-500 ' onClick={()=>navigate(`Register`)}> Register </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </PageContainer>
        
      </section></>
  
    )
}



export default Login