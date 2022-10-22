import React, { useEffect, useState } from 'react';
import { arr } from './TrendData';
import { arrtop } from './TopData';
import './TrendTopStyle.css';
import TTCode from './TTCode';

function TrendTop() {
    
    const [windowSize, set_windowSize] = useState(getWindowSize());
    const [topcalled, set_topcalled] = useState(false);

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
            <div className='parentclasstt'>
                <div className='parnavtrendtop'>
                    <div className='navtrendtop'>
                        <a className={!topcalled ? 'ttbtn1' : 'ttbtn2'} onClick={() => {
                            set_topcalled(false);
                        }}> <h2> Trending </h2> </a>
                        <a className={topcalled ? 'ttbtn3' : 'ttbtn4'} onClick={() => {
                            set_topcalled(true);
                        }}> <h2> Top </h2> </a>
                    </div>
                    <div className='twobtns'>
                        <ul>
                            <li> <button> 24h </button> </li>
                            <li> <button> View All </button> </li>
                        </ul>
                    </div>
                </div>
                <div className='partrendtop'>
                    {(topcalled === true) ? 
                        (<div className='trendtop'>
                            <TTCode i={0} j={5} arr={arrtop} topcalled={topcalled} windowSize={windowSize.innerWidth} />
                            {windowSize.innerWidth > 1000 ? 
                            (<TTCode i={5} j={10} arr={arrtop} topcalled={topcalled} windowSize={windowSize.innerWidth} />) : (<></>)
                            }
                        </div>) : 
                        (<>
                            <div className='trendtop'>
                                <TTCode i={0} j={5} arr={arr} topcalled={topcalled} windowSize={windowSize.innerWidth} />
                                {windowSize.innerWidth > 1000 ? 
                                (<TTCode i={5} j={10} arr={arr} topcalled={topcalled} windowSize={windowSize.innerWidth} />) : (<></>)
                                }
                            </div>
                        </>)
                    }
                </div>
            </div>
        );
}

export default TrendTop;