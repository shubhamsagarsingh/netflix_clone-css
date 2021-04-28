import React from 'react'
import logo from '../svg/logo.svg'
import styled from 'styled-components'
import LoginForm from '../components/login/LoginForm'
import LoginFooter from '../components/login/LoginFooter'



const Login = () => {
    return(
        <div className='main-login-container'>
            <div className='header-top'>
                <Logo src={logo} alt='' className='logo'/>
            </div>
            <LoginForm />
            <LoginFooter />
        </div>
    )
}



export default Login



//LOGO
const Logo = styled.img`
    width: 11rem;
    position: absolute;
    top: 15%;
    left: 11%;
    translate: transform(-50%, -50%);
    margin-left: 0;
`;