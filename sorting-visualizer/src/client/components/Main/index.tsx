import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Visualizer from './Visualizer';

const Main: React.FC = () => {
    return(
        <>
            <Header />
            <Visualizer />
            <Footer /> 
        </>
    );
}

export default Main;