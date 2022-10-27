import React, { useState, useEffect } from 'react';
import { market } from './MarketPlaceData';
import './HeaderStyle.css';
import { resourceData } from './ResourcesData';
import { statData } from './StatsData';
import { settings } from './SettingsData';

function Header({scrolled, theme, set_theme}) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [windowSize, set_windowSize] = useState(getWindowSize());
    const [eleClick1, set_eleClick1] = useState(false);
    const [eleClick2, set_eleClick2] = useState(false);
    const [eleClick3, set_eleClick3] = useState(false);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }
    
    useEffect(() => {
        function handleResize() {
            set_windowSize(getWindowSize());
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="divhead">
            <nav className={scrolled !== 0 ? `snavigation ${theme}` : "navigation"}>
                <a href="#"> <img className='logo' src={"./social_media_images/mylogo.png"}></img> </a>
                <a href="#" className="brand-name">
                    OpenSea
                </a>
                <input className='search' placeholder='Search' />
                <div className='dropdown'>
                    <button className='drop' onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}> = </button>
                </div>
                {(windowSize.innerWidth > 1000) ? 
                (<div className="navigation-menu">
                    <ul>
                        <div className='dropdownele'>
                            <li>
                                <a className='dropbtn' href="#"> Explore </a>
                                <div className='dropdown-content'>
                                    {market.map((val) => {
                                        return (
                                            <a href="#"> {val} </a>
                                        );
                                    })}
                                </div>
                            </li>
                        </div>
                        <div className='dropdownele'>
                            <li>
                                <a className='dropbtn' href="#"> Stats </a>
                                <div className='dropdown-content'>
                                    {statData.map((val) => {
                                        return (
                                            <a href="#"> {val} </a>
                                        );
                                    })}
                                </div>
                            </li>
                        </div>
                        <div className='dropdownele'>
                            <li>
                                <a className='dropbtn' href="#"> Resources </a>
                                <div className='dropdown-content'>
                                    {resourceData.map((val) => {
                                        return (
                                            <a href="#"> {val} </a>
                                        );
                                    })}
                                </div>
                            </li>
                        </div>
                        <li>
                            <a className='dropbtn' href="#"> Create </a>
                        </li>
                        <div className='dropdownele'>
                            <li> 
                                <a className='dropbtn' href='#'> 
                                    <img src={"./nav_images/1.png"}></img> 
                                </a> 
                                <div className='dropdown-content'>
                                    {settings.map((val) => {
                                        return (
                                            <>
                                                {(val !== 'Night Mode') ? (<a href="#"> {val} </a>) : 
                                                (
                                                    <a href="#"> Night Mode 
                                                        <input type="checkbox" name='night' id='night' onClick={(e) => {
                                                            e.target.checked ? set_theme('night') : set_theme('light');
                                                        }} checked={theme === 'night' ? true : false} />
                                                    </a>
                                                )
                                                }
                                            </>
                                        );
                                    })}
                                </div>
                            </li>
                        </div>
                        <li> <a className='dropbtn' href='#'> <img src={"./nav_images/2.png"}></img> </a> </li>
                        <li> <a className='dropbtn' href='#'> <img src={"./nav_images/3.png"}></img> </a> </li>
                    </ul>
                </div>) : null
                }
            </nav>
            {(isNavExpanded && (windowSize.innerWidth < 1000)) ? 
            (<div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li>
                        <a href="#" onClick={() => {
                            set_eleClick1(!eleClick1);
                            set_eleClick2(false);
                            set_eleClick3(false);
                        }}> Explore &#8964;</a>
                        {eleClick1 ? 
                        (
                            <>
                                {market.map((val) => {
                                    return (
                                        <a href="#"> {val} </a>
                                    );
                                })}
                            </>   
                        ) : null}
                    </li>
                    <li>
                        <a href="#" onClick={() => {
                            set_eleClick1(false);
                            set_eleClick2(!eleClick2);
                            set_eleClick3(false);
                        }}> Stats &#8964; </a>
                        {eleClick2 ? 
                        (
                            <>
                                {statData.map((val) => {
                                    return (
                                        <a href="#"> {val} </a>
                                    );
                                })}
                            </>   
                        ) : null}
                    </li>
                    <li>
                        <a href="#" onClick={() => {
                            set_eleClick1(false);
                            set_eleClick2(false);
                            set_eleClick3(!eleClick3);
                        }}> Resources &#8964; </a>
                        {eleClick3 ? 
                        (
                            <>
                                {resourceData.map((val) => {
                                    return (
                                        <a href="#"> {val} </a>
                                    );
                                })}
                            </>   
                        ) : null}
                    </li>
                    <li>
                        <a href="#" onClick={() => {
                            set_eleClick1(false);
                            set_eleClick2(false);
                            set_eleClick3(false);
                        }}> Create </a>
                    </li>
                    <li>
                        <a href="#"> Night Mode 
                            <input type="checkbox" name='night' id='night' onClick={(e) => {
                                e.target.checked ? set_theme('night') : set_theme('light');
                            }} checked={theme === 'night' ? true : false} />
                        </a>
                    </li>
                </ul>
            </div>) : null}
        </div>
    );
}
export default Header;