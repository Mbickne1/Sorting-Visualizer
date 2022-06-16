import React from 'react';
import Bar from './Bar';
import styles from './Visualizer.module.css';


interface VisualizerProps {
    barArray: number[]
}

const Visualizer: React.FC<VisualizerProps> = ({
    barArray
}) => {
    console.log(barArray);
    return(
        <div className={styles.visContainer}>
            {barArray.map((bar, idx) => (
                <Bar key={idx} value={bar}/>
            ))}
        </div>
    );
}

export default Visualizer;