import React from 'react'
import ImgTv from '../../images/tab-tv.png'
import ImgTablet from '../../images/tab-tablet.png'
import ImgMacbook from '../../images/tab-macbook.png'
import styled from 'styled-components'
import { Button } from '../Button'



const TabContentTwo = () => {
    return(
        <TabContainer>
            <div className='tab-content'>
                <div className='tab-top-content'>
                    <span style={{ fontSize: '1.5rem'}}>Watch TV shows and movies anytime, anywhere - personalized for you.</span>
                    <Button className='btn'>try it now</Button>
                </div>

                <div className='tab-bottom-content'>
                    <div>
                        <img src={ImgTv} alt='' style={{ width: '18.75rem' }} />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>

                    <div>
                        <img src={ImgTablet} alt='' style={{ width: '18.75rem', paddingTop: '0.625rem' }} />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>

                    <div>
                        <img src={ImgMacbook} alt='' style={{ width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem' }} />
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                </div>
            </div>
        </TabContainer>
    )
}



export default TabContentTwo



const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content{
        margin: 0 15%;
    }

    // TAB TOP CONTENT
    .tab-top-content{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-item: center;
        padding: 2.5rem 0;
    }

    span{
        grid-column: 1/8;
    }

    .btn{
        grid-column: 10/12;
    }

    // TAB TOP CONTENT
    .tab-bottom-content{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
    }

    p{
        color: var(--main-grey);
    }
`;