import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import GoogleImage from '../../../src/images/google.svg';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const SignUp = () => {

    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        
        if (password < 6 ) {
            setError(`Password should contain at least 6 character`);
            return;
        }

        if(password !== confirmPassword){
            setError(`Password didn't Match`);
            return;
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=> console.error(error))
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" required/>
                </div>
                <p className='text-error'>{error}</p>
                <div className="form-control">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <p>Already have an account? <Link to='/login' className='orange-text'>Login</Link></p>
            <button className='social-login-button'><img className='button-icon' src={GoogleImage} alt="" />Continue with Google</button>
        </div>
    );
};

export default SignUp;