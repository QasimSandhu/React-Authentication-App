import React from 'react';

const Details = () => {

    const userData = JSON.parse(localStorage.getItem('Get_User_Login_Data'));

    return (
        <div>
            <h2>User Name: {userData.userName}</h2>
            <h2>Email: {userData.email}</h2>
            <h2>DOB: {userData.date}</h2>
        </div>
    );
}

export default Details;
