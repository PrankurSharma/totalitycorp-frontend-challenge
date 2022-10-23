import React, { useEffect, useRef, useState } from 'react';
import './ExpNotSpotCarousel.css';


function ExpNotSpot({notspot, divreq, arr}) {
    const ref = useRef();
    const secondary_ref = useRef();
    const [width, set_width] = useState(0);
    const scrollX = (scrollLength) => {
        ref.current.scrollLeft += (scrollLength + 14);
    }
    useEffect(() => {
        set_width(secondary_ref.current.offsetWidth);   
    }, [ref]);

    return (
        <div className='mainexp'>
            <div className='expss'>
                <a className="prevbtn" onClick={() => {
                    scrollX(-width);
                }}> ❮ </a>
            </div>
            <div className='exps' ref={ref}>
            {arr.map((val) => {
                return ( 
                    <div className={notspot ? 'nsubexp' : 'subexp'} ref={secondary_ref}>
                        <div>
                            <img src={val.image}></img>
                        </div>
                        {divreq ? 
                        (<div className='para'>
                            <p> {val.name} </p>    
                        </div>) : null}
                    </div>
                );
            })}
        </div>
            <div className='expss'>
                <a className="nextbtn" onClick={() => {
                    scrollX(width);
                }}> ❯ </a>
            </div>
        </div>
    );
}

export default ExpNotSpot;