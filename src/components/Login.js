import React from 'react'

const Login = () => {
    return (
        <div>
                                <div className="form-group">
                                    <label>Username : </label>
                                    <input type="text" className="form-control"></input>
                                </div>

                                <div className="form-group">
                                    <label>Password : </label>
                                    <input type="password" className="form-control"></input>
                                </div>
                                    <button className="btn btn-primary" >Login</button>
                                
              
        </div>
    );
}

export default Login
