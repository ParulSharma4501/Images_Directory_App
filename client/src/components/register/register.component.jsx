import React,{useState} from 'react'

import "./register.styles.css";

import axios from "axios";

function Register() {


  const [input, setInput] = useState({
   
    username: "",
    password: "",
    
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      username: input.email,
   
      password: input.password,
     
    };

    await axios.post("/api/register", newUser);

    console.log("Clicked");
    console.log(newUser);
 
  }


    return (
        <div>
        <div className="container mt-5">
          <br></br>
  <h1 className="title">Register</h1>

  <div className="row">
    <div className="col-sm-8">
      <div className="card">
        <div className="card-body">

                  {/* <!-- Makes POST request to /register route --> */}
                  
                  
          <form action="/api/register" onSubmit={handleSubmit} method="POST">
            <div className="form-group">
              <label for="email">Email</label>
                      <input type="email" className="form-control margin" name="username" onChange={handleChange} />
                      <br></br>
                      <br></br>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
                      <input type="password" className="form-control" name="password" onChange={handleChange} />
                      <br></br>
                    </div>
                    <br></br>
                    <br></br>
                    <button type="submit" className="btn btn-dark">Register</button>
              
          </form>

        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Register
