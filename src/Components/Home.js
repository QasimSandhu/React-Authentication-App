import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import SignImg from './SignImg';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {

    // Redirect after click
    const navigate = useNavigate();

    // Initial Input fields value
    const [inputValue, setInputValue] = useState({
        userName: "",
        email: "",
        date: "",
        password: ""
    });

    // Input fields get data onChange
    const getData = (e) => {
        setInputValue((inputValue) => {
            return {
                ...inputValue,
                [e.target.name]: e.target.value
            }
        });
    };

    // Submit Signup Form data on click
    const submitData = (e) => {
        if (inputValue.userName && inputValue.email && inputValue.date && inputValue.password) {
            localStorage.setItem('Signup_Form_Data', JSON.stringify(inputValue));
            alert("Your Account has been created.");
            navigate('../Components/Login');
        }
    };

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 w-100 p-3">
                        <h3 className='text-center col-lg-7'>Sign Up</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicUserName">
                                <Form.Control type="text" required name='userName' onChange={getData} placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">
                                <Form.Control type="email" required name='email' onChange={getData} placeholder="Your Email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicDate">
                                <Form.Control type="date" required name='date' onChange={getData} />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicPassword">
                                <Form.Control type="password" required name='password' onChange={getData} placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button className='btn btn-success' onClick={submitData} variant="primary" type="button">Submit</Button>
                        </Form>
                        <p className="mt-3">Already Have an Account {' '} <span><NavLink to="/Components/Login">SignIn</NavLink></span></p>
                    </div>
                    <SignImg />
                </section>
            </div>
        </>
    );
};

export default Home;