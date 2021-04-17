import React from 'react'
import logo from '../svg/logo.svg'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'


const Header = () => {
    return(
        <HeaderComponent className='header-container'>
            <div className='header-top'>
                <Logo src={logo} alt=''/>
                <NavLink className='signIn-btn' to=''>Sign In</NavLink>
            </div>

            <div className='header-content'>
                <Title>See what's next</Title>
                <SubTitle>WATCH ANYWHERE. CANCEL ANYTIME</SubTitle>
                <Link className='main-offer-btn'>try it now<Icon className='Icon' icon={ic_keyboard_arrow_right} size={40} /></Link>
            </div>
        </HeaderComponent>
    )
}


export default Header



//LOGO
const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 7%;
    left: 43%;
    translate: transform(-50%, -50%); 
`;



//HEADER COMPONENT
const HeaderComponent = styled.div`
    .signIn-btn{
        right: 0;
        margin: 1.125rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weight: 400;
        line-height: normal;
        border-radius: 0.1875rem;
        font-size: 1rem;
        background: var(--main-red);
        position: absolute;
        translate: transform(-50%, -50%);
        cursor: pointer;
        transition: background 0.2s ease-in;
        &:hover{
            background: var(--main-red-hover);
        }
        
    }

    //HEADER TOP
    .header-top{
        position: relative;
        height: 10rem;
        z-index: 1;
    }

    //HEADER CONTENT
    .header-content{
        position: relative;
        width: 65%;
        margin: 4.5rem auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        z-index: 1;
    }

    //MAIN OFFER BUTTON
    .main-offer-btn{
        display: inline-block;
        background: var(--main-red);
        text-transform: uppercase;
        border: none;
        outline: none;
        margin: 0 33%;
        padding: 1.5rem;
        border-radius: 0.1875rem;
        font-size: 2rem;
        text-align: center;
        box-shadow: 0 1px 0 rgba(0,0, 0, 0.45);
        transition: background 0.2s ease-in;
        cursor: pointer;
        &:hover{
            background: var(--main-red-hover);
        }
    }

    //BUTTON ICON
    .Icon{
        vertical-align: bottom;
        margin-left: 0.4rem;
    }
`;



//MAIN TITLE
const Title = styled.h1`
    margin: 0 0 1.2rem;
    font-size: 5rem;
    font-weight: 700;
    line-height: 3rem;
`;


//SUBTITLE
const SubTitle = styled.h2`
    margin: 0 0 1.2rem;
    font-size: 1.875rem;
    font-weight: 400;
    line-height: 3rem;
    text-transform: uppercase;
`;