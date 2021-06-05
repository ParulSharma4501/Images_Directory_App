import React,{useState} from 'react';

import "./login.styles.css";

import axios from "axios";

function Login() {

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  
  async function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: input.username,
      password:input.password
    }
    await axios.post("/api/login", user);
    console.log("Clicked");
    console.log(user);

  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

    return (
    
      <div className="container mt-5">
        <br></br>
  <h1 className="title">Login</h1>

  <div className="row">
    <div className="col-sm-8">
      <div className="card">
        <div className="card-body">

          {/* <!-- Makes POST request to /login route --> */}
          <form onSubmit={handleSubmit} >
                  <div className="form-group"> 
                    <label for="email">Email</label>
                    <input type="email" class="form-control margin" name="username" onChange={handleChange}/>
                  </div>

                  <br></br>
                  <div className="form-group">
                    
                    <label for="password">Password</label>
                    
                    <input type="password" className="form-control" name="password" onChange={handleChange} />    
                  </div>
                  <div>
                
                  </div>
                  <br></br>
                  <br></br>
                  <button type="submit" className="btn btn-dark">Login</button>
          </form>

        </div>
      </div>
      </div>

            </div>
            </div>

    )
}

export default Login
