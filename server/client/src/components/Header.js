import React from 'react';
import './Header.css';
import TeslaLogoSmall from '../assets/teslaLogoSmall.svg';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Icon } from '@material-ui/core';

const Header = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='header_logo'>
                            <img src={TeslaLogoSmall} alt='Tesla Logo'/>
                        </div>

                <div className='central_header' >
                            <p>MODEL  S</p>
                            <p>MODEL  3</p>
                            <p>MODEL  X</p>
                            <p>MODEL  Y</p>
                            <p>CYBERTRUCK</p>
                            <p>POWERWALL</p>
                        </div>

                <div className='right_header'>
                    <p>TESLA 帳戶</p>
                    <DehazeIcon className='nav_menu'/>
                </div>
            </div>
        </div>
    )
}

export default Header;
