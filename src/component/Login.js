import React from 'react';
import '../css/Login.css';

function Login() {
    return (
        <div className="container">
            <h2>Form Login</h2>
            <div className="card">
                <h3>Tugas Pertemuan 3</h3>
                <br/>
                <div className="row">
                    <p>Username</p>
                    <input type="text" placeholder="     Masukan Username" />
                </div>
                <div className="row">
                    <p>Password</p>
                    <input type="text" placeholder="     Masukan Password" />
                </div>
                

                <div className="row">
                    <button className='login-button'> Login </button>
                </div>
                <div className="row">
                    <input type="checkbox" name="rememberMe"/>
                    <p style={{fontWeight:'normal', marginTop:'25px'}}>Remember Me</p>
                </div>

                <br/>

                <div className="row">
                    <button className="cancel-button">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;