import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Visualizer from './Visualizer';
import styles from './main.module.css';
import { generateRandomArray } from './utils';

const Main: React.FC = () => {
    const [numArray, setNumArray] = useState<number[]>([]);

    return(
        <div className={styles.container}>
            {/* <Header /> */}
            <Visualizer barArray={generateRandomArray(20)}/>
            {/* <Footer />  */}
        </div>
    );
}

export default Main;