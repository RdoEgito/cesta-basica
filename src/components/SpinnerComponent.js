import React from 'react';
import { ClipLoader } from 'react-spinners';

const SpinnerComponent = ({loading}) => {
    return (
        <>
            <div className='spinner'>
                <ClipLoader
                color='#4D4D4D'
                loading={loading}
                size={50} />
            </div>
        </>
    );
}

export default SpinnerComponent;