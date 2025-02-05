import React from 'react';
import Banner from './Banner';
import Products from './Products';
import TextSlider from './TextSlider';
import SportsCategory from './SportsCategory';
import PerformanceHub from './PerformanceHub';
import TrendingProducts from './TrendingProducts';
import AthleticIntro from './AthleticIntro';
import CustomerBenefits from './CustomerBenefits';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
             <Helmet>
              <title>Sports Sphere | Home</title>
           </Helmet>
            <Banner></Banner>
            <TextSlider></TextSlider>
            <Products></Products>
            <PerformanceHub></PerformanceHub>
            <TrendingProducts></TrendingProducts>
            <AthleticIntro></AthleticIntro>
            <CustomerBenefits></CustomerBenefits>
            <SportsCategory></SportsCategory>
        </div>
    );
};

export default Home;