import React from 'react';
import { Link } from 'react-router-dom';

export default function SignupForm() {
    return (
        <>
            <div className='container-fluid'>
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="text-center mb-4">Sign Up</h2>
                                    <form className='row g-3 my-3'>
                                        <div className="form-group">
                                            <label htmlFor="inputUserName">User Name</label>
                                            <input type="userName" className="form-control" id="inputUserName" aria-describedby="userNameHelp" placeholder="Enter User Name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputEmail">Email address</label>
                                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword">Password</label>
                                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary">Sign Up</button>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <p className="text-center mt-3">Already have an account?{" "}
                                                <Link to="/SigninForm" className="btn btn-link">Login Form</Link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
