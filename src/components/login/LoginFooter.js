import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld'
import {androidArrowDropdown} from 'react-icons-kit/ionicons/androidArrowDropdown'



const LoginFooter = () => {
    return(
        <FooterContainer>
            <span style={{ margin: '15%', fontSize: '1.125rem' }}>Questions? <Link>Call 1-877-742-1335</Link></span>
            
            <div className='footer-columns'>
                <ul>
                    <li><Link>Gift Card Terms</Link></li>
                </ul>

                <ul>
                    <li><Link>Terms of Use</Link></li>
                </ul>

                <ul>
                    <li><Link>Privacy Statement</Link></li>
                </ul>
            </div>

            <div className='lang-btn'>
                <Icon icon={iosWorld} size={20} />
                &nbsp;&nbsp;English&nbsp;
                <Icon icon={androidArrowDropdown} size={20} />
            </div>

            <span style={{ marginLeft: '15%', fontSize: '0.9rem'}}>Netflix India</span>
        </FooterContainer>
    )
}



export default LoginFooter



const FooterContainer = styled.footer`
    justify-content: center;
    background: rgba(0,0,0,0.8);
    padding-top: 2rem;
    padding-bottom: 3rem;
    position: relative;
    z-index: 5;

    .footer-columns{
        width: 70%;
        margin: 1rem auto 0;
        font-size: 0.9rem;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    ul li{
        list-style: none;
        line-height: 2.5;
    }

    a{
        color: #999;
    }

    a:hover{
        text-decoration: underline;
        cursor: pointer;
    }

    //LANGUAGE BUTTON
    .lang-btn{
        margin: 2rem 15%;
        background: transparent;
        border: 0.9px solid #333;
        padding: 0.7rem;
        width: 8rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .lang-btn:hover{
        cursor: pointer;
        background: #111;
    }
`;