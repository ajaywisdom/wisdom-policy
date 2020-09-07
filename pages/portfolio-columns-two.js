import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PortfolioColumnsTwoCard from '../components/Portfolio/PortfolioColumnsTwoCard';
import Footer from '../components/_App/Footer';

const PortfolioColumnsTwo = () => {
    return (
        <React.Fragment>
            <NavbarTwo />
            <PageBanner 
                pageTitle="Portfolio Columns Two" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Portfolio Columns Two" 
            /> 
            <PortfolioColumnsTwoCard />
            <Footer />
        </React.Fragment>
    )
}

export default PortfolioColumnsTwo;