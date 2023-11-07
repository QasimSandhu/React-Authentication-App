import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import SignImg from './SignImg';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

    // Redirect after click
    const navigate = useNavigate();

    // Initial Input fields value
    const [inputValue, setInputValue] = useState({
        email: "",
        password: ""
    });

    // Input fields get data onChange
    const getData = (e) => {

        const { value, name } = e.target;

        // Update input field data
        setInputValue((inputValue) => {
            return {
                ...inputValue,
                [name]: value
            }
        });
    };

    // Sign in button click
    const signIn = () => {
        const storedData = JSON.parse(localStorage.getItem('Signup_Form_Data'));
        if (storedData && storedData.email === inputValue.email && storedData.password === inputValue.password) {
            const matchedUser = storedData.find((user) => user.email === inputValue.email && user.password === inputValue.password);
            localStorage.setItem('Get_User_Login_Data', JSON.stringify(matchedUser))
            navigate('../Components/Details');
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 w-100 p-3">
                        <h3 className='text-center col-lg-7'>Login</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
                                <Form.Control type="email" required name='email' onChange={getData} placeholder="Your Email" />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicPassword">
                                <Form.Control type="password" required name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button className='btn btn-success' onClick={signIn} variant="primary" type="button">SignIn</Button>
                        </Form>
                        <p className="mt-3">Don't Have an Account {' '} <span><NavLink to="/Components/Home">SignUp</NavLink></span></p>
                    </div>
                    <SignImg />
                </section>
            </div>
        </>
    );
}

export default Login;
