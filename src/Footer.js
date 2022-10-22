import React from 'react';
import { comData } from './CompanyData';
import './FooterStyle.css';
import { market } from './MarketPlaceData';
import { myacc } from './MyAccountData';
import { resourceData } from './ResourcesData';
import { socData } from './SocialData';
import { statData } from './StatsData';

function Footer() {
    return (
        <div className='footer'>
            <div className='fsubdiv1'>
                <div className='footchild'>
                    <h2> Stay in the loop </h2>
                    <div className='freg'>
                        <p> Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea. </p>
                        <input placeholder='Your email address'/>
                        <button> <p> Sign up </p> </button>
                    </div>
                </div>
                <div className='footchild'>
                    <h2> Join the community </h2>
                    <div className='parfinnerdiv'>
                        {socData.map((val) => {
                            return (
                                <div className='finnerdiv'> <img src={val}></img> </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className='fsubdiv2'>
                <div className='footchild'>
                    <div className='fchild'>
                        <img src={'./social_media_images/mylogo.png'}></img>
                        <h2> OpenSea </h2>
                        <p> The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items. </p>
                    </div>
                </div>
                <div className='footchild'>
                    <div className='footcontainer2'>
                        <div className='mplaceaccsat'>
                            <div className='mplace'>
                                <h3> Marketplace </h3>
                                <ul>
                                    {market.map((val) => {
                                        return (
                                            <li> <a href='#'> <h4> {val} </h4> </a> </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className='accountstat'>
                                <div className='account'>
                                    <h3> My Account </h3>
                                    <ul>
                                        {myacc.map((val) => {
                                            return (
                                                <li> <a href='#'> <h4> {val} </h4> </a> </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className='stats'>
                                    <h3> Stats </h3>
                                    <ul>
                                        {statData.map((val) => {
                                            return (
                                                <li> <a href='#'> <h4> {val} </h4> </a> </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='rescom'>
                            <div className='resources'>
                                <h3> Resources </h3>
                                <ul>
                                    {resourceData.map((val) => {
                                        return (
                                            <li> <a href='#'> <h4> {val} </h4> </a> </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className='company'>
                                <h3> Company </h3>
                                <ul>
                                {comData.map((val) => {
                                    return (
                                        <li> <a href='#'> <h4> {val} </h4> </a> </li>
                                    );
                                })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fsubdiv3'>
                <div className='copyright'>
                    <p> &#169; 2018-2022 Ozone Networks, Inc </p>
                </div>
                <div className='termspri'>
                    <ul>
                        <li> Privacy Policy </li>
                        <li> Terms of Service </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Footer;