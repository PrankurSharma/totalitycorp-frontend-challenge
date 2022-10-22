import React from 'react';
import './TrendTopStyle.css';

function TTCode({i, j, arr, topcalled, windowSize}) {
    return (
        <div className='subtrendtop'>
            <table>
                <thead>
                    <tr>
                        <th> COLLECTION </th>
                        {windowSize > 1000 ? (<th> FLOOR PRICE </th>) : null}
                        <th> VOLUME </th>
                        </tr>
                </thead>
                <tbody>
                    {arr.slice(i, j).map((val, index) => {
                        return (
                            <tr> 
                                <td>
                                    <div className='allitems'>
                                        <div className='subitems'> <h4> {index + i + 1} </h4> </div>
                                            <div className='subitems'> <img src={val.image}></img> </div> 
                                                <div className='subitems'> 
                                                    <h3> {val.name} </h3>
                                                    {windowSize < 1000 ? (
                                                    <h4 className='fprice'> Floor Price: {val.floor_price} </h4>) :
                                                    (<></>)
                                                    } 
                                                </div>
                                    </div>
                                </td>
                                {windowSize > 1000 ? (
                                <td>
                                    <h3> {val.floor_price} </h3>
                                </td>) :
                                (<></>)
                                }
                                <td> 
                                    <h3> {val.volume} </h3>
                                    {topcalled && <h3 className={val.gain_loss.includes('+') ? 'floor1' : (val.gain_loss.includes('-') && (val.gain_loss.length > 1)) ? 'floor2' : 'floor3'}> {val.gain_loss} </h3>}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TTCode;