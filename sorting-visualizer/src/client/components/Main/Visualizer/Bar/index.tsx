import React from 'react';

interface BarProps {
    value: number;
}

const Bar: React.FC<BarProps> = ({
    value
}) => {

    return(
        <div 
            style={{
                backgroundColor: 'blue',
                height: (value + 50).toString() + 'px',
                width: '35px',
                display: 'flex',
            }}
        />

        
    );
}

export default Bar;