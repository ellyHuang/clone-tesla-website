import React from 'react';
import Button from './Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './ScrollPage.css';

const ScrollPage = ({title, desc, descLink, backgroundImage, leftBtnText, leftBtnlLink, rightBtnText, rightBtnlLink, twoButtons, first}) => {
    return (
        <div className='scrollPage' style={{
            backgroundImage: `url(${backgroundImage})`
        }}>
            <div className='scrollPage_container'>
                <div className='scrollPage_text'>
                    <h1 className='title'>{title}</h1>
                    <div className='scrollPage_desc'>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className='scrollPage_lowerThird'>
                    <div className='scrollPage_buttons'>
                        <Button imp='primary' text={leftBtnText} link={leftBtnlLink}/>
                        {twoButtons && (
                            <Button imp='secondary' text={rightBtnText} link={rightBtnlLink}/>
                        )}
                    </div>
                    
                    {first && (
                            <div className='scrollPage_expand'>
                                <ExpandMoreIcon/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ScrollPage;
