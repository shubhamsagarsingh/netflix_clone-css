import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld'
import {androidArrowDropdown} from 'react-icons-kit/ionicons/androidArrowDropdown'


const Footer = () => {
    return(
        <FooterContainer>
            <span style={{ margin: '18%', fontSize: '1.125rem' }}>Questions? <Link>Call 1-877-742-1335</Link></span>
            
            <div className='footer-columns'>
                <ul>
                    <li><Link>FAQ</Link></li>
                    <li><Link>Investor Relations</Link></li>
                    <li><Link>Ways to Watch</Link></li>
                    <li><Link>Corporate Information</Link></li>
                    <li><Link>Netflix Originals</Link></li>
                </ul>

                <ul>
                    <li><Link>Help Center</Link></li>
                    <li><Link>Jobs</Link></li>
                    <li><Link>Terms of Use</Link></li>
                    <li><Link>Contact Us</Link></li>
                </ul>


                <ul>
                    <li><Link>Account</Link></li>
                    <li><Link>Redeem Gift Cards</Link></li>
                    <li><Link>Privacy</Link></li>
                    <li><Link>Speed Test</Link></li>
                </ul>


                <ul>
                    <li><Link>Media Center</Link></li>
                    <li><Link>Buy Gift Cards</Link></li>
                    <li><Link>Cookie Preferences</Link></li>
                    <li><Link>Legal Notices</Link></li>
                </ul>
            </div>

            <div className='lang-btn'>
                <Icon icon={iosWorld} size={20} />
                &nbsp;&nbsp;English&nbsp;
                <Icon icon={androidArrowDropdown} size={20} />
            </div>

            <span style={{ marginLeft: '18%', fontSize: '0.9rem'}}>Netflix India</span>
        </FooterContainer>
    )
}



export default Footer



const FooterContainer = styled.footer`
    background: var(--main-deep-dark);
    padding-top: 10rem;
    padding-bottom: 3rem;
    color: #999;

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
        margin: 2rem 18%;
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