import React from 'react';
import { cats } from './CategoriesData';
import './CategoriesGrid.css';

function Categories() {
    return (
        <>
            <div className='cat'>
                {cats.map((val) => {
                    return ( 
                        <div className='subcat'>
                            <div className='subcatimg'>
                                <img src={val.image}></img>
                            </div>
                            <div className='subcatname'>
                                <p> {val.name} </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default Categories;