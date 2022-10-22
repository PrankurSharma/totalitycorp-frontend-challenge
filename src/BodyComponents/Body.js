import React from 'react';
import Categories from './Categories';
import ExpNotSpot from './ExpNotSpot';
import { notable } from './NotableDetails';
import TrendTop from './TrendTop';
import { ens } from './ExpNotSpotDetails';
import { exp } from './ExploreDetails';
import { dream } from './DreamersDetails';

function Body() {
    return (
        <div>
            <h1 className='mainhead'> Explore, Collect and Sell NFTs </h1>
            <ExpNotSpot notspot={false} divreq={false} arr={exp} />
            <TrendTop />
            <h1 className='myhead'> New and Notable </h1>
            <ExpNotSpot notspot={true} divreq={false} arr={notable} />
            <h1 className='myhead'> Cityscapes Spotlight </h1>
            <ExpNotSpot notspot={true} divreq={false} arr={dream}/>
            <h1 className='myhead'> NFT 101 </h1>
            <h2 className='myhead'> Get comfortable with the basics. </h2>
            <ExpNotSpot notspot={true} divreq={true} arr={ens}/>
            <h1 className='myhead'> Browse by Category </h1>
            <Categories />
        </div>
    );
}

export default Body;