import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import GoogleImage from '../../../src/images/google.svg';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(error=> console.error(error))
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required/>
                </div>
                <div className="form-control">
                    <Link><button type="submit">Login</button></Link>
                </div>
            </form>
            <p>New to Ema John? <Link to='/signup' className='orange-text'>Create New Account</Link></p>
            <button className='social-login-button'><img className='button-icon' src={GoogleImage} alt="" />Continue with Google</button>
        </div>
    );
};

export default Login;