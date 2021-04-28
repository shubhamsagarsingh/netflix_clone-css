import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import FBlogo from '../../images/fb-logo.png'



const LoginForm = () => {
    return(
        <FormContainer>
            <div className='form-container'>
                <form>
                    <h1>Sign In</h1>
                    <div className='input-container'>
                        <input className='input-empty' type='email' required/>
                        <label>Email or Phone Number</label>
                    </div>

                    <div className='input-container'>
                        <input className='input-empty' type='password' required/>
                        <label>Password</label>
                    </div>

                    <div className='input-container'>
                        <Button type='submit'>Sign In</Button>
                    </div>

                    <label className='checkbox-container'>
                        Remember me
                        <input type='checkbox' checked />
                        <span className='checkmark'></span>
                    </label>

                    <Link to='/' className='need-help'>Need Help?</Link>

                    <div className='bottom-form'>
                        <img src={FBlogo} alt='facebook' />
                        <Link to='/' className='login-fb-text'>
                            Login with Facebook
                        </Link>
                        <br/>
                        <br/>
                        <span style={{ color: '#999' }}>New to Netflix?</span>
                        &nbsp;
                        &nbsp;
                        <Link to='/' className='sign-up-text'>
                            Sign up now
                        </Link>
                    </div>
                </form>
            </div>
        </FormContainer>
    )
}



export default LoginForm



//FORM CONTAINER
const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 1;

    .form-container{
        background: rgba(0,0,0,0.8);
        position: relative;
        width: 28.125rem;
        height: 38.25rem;
        padding: 4rem;
        margin: 8.5rem;
    }

    .input-container{
        display: grid;
        gird-template-columns: 1fr;
        margin-top: 1.2rem;
    }

    .input-empty{
        color: #fff;
        background: #333;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        padding: 0.9rem 1.25rem 0;
    }

    form div label{
        position: absolute;
        top: 0.635rem;
        left: 1.25rem;
        pointer-events: none;
        color: #8a8a8a;
        font-size: 1rem;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
    }

    form div{
        position: relative;
    }

    input:focus ~ label{
        top: 0.4375rem;
        font-size: 0.7rem;
    }

    input:focus{
        outline: none;
    }

    //CHECKBOX
    .checkbox-container{
        margin-left: 0.75rem;
        padding-left: 1.875rem;
        position: relative;
        font-size: 0.9rem;
        color: #999;
        cursor: pointer;
    }

    .checkbox-container input{
        display: none;
    }

    .checkbox-container .checkmark{
        display: inline-block;
        background: #454545;
        width: 1.1rem;
        height: 1.1rem;
        left: 0;
        top: 0;
        border-radius: 0.1rem;
        position: absolute;
    }

    .checkbox-container input:checked + .checkmark:after{
        content: '';
        position: absolute;
        height: 0.25rem;
        width: 0.625rem;
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        top: 25%;
        left: 21%;
        transform: rotate(-45deg);
    }

    .need-help{
        text-decoration: none;
        color: #828282;
        margin-left: 4.6rem;
        font-size: 0.9rem;
    }

    //BOTTOM FORM
    .bottom-form img{
        width: 1.5625rem;
        margin: 0.625rem 0.625rem -0.4375rem 0;
    }

    .login-fb-text{
        color: #828282;
        font-size: 0.9rem;
    }

    .bottom-form{
        position: absolute;
        bottom: 40px;
    }

    .sign-up-text{
        font-size: 1.1rem;
        color: #fff;
        &:hover{
            text-decoration: underline;
        }
    }
`;

//BUTTON
const Button = styled.button`
    color: #fff;
    background: rgba(229,9,20);
    border: none;
    outline: none;
    padding: 0.8rem 1.3rem;
    border-radius: 0.125rem;
    font-size: 1rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    transition: opacity .2s ease-in;
    cursor: pointer;
    text-decoration: none;
    margin: 1rem 0;
`;