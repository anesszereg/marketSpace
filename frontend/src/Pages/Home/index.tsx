import React from 'react';
import Collection from './Collection';
import Service from './CollectionService';
import LastestCollection from './Slider/LatestCollection';
import Shopping from './ShopingService';
import TopProducts from './TopProduct';
import CollectionSlider from './Slider/CollectionSlider';
import Shoping from './Shopping';
import FollowUs from './FollowUs';

const Home = () => {
    document.title = "Index | Toner - React FrontEnd";

    return (
        <React.Fragment>
            <Collection />
            <Service />
            <TopProducts />
            <Shopping />
            <LastestCollection />
            <CollectionSlider />
            <Shoping />
            <FollowUs />
        </React.Fragment>
    );
}

export default Home;