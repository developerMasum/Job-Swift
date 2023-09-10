import React from 'react';

const Title = ({mainTitle, subTitle}) => {
    return (
        <div className='text-center'>
            <h2 className='text-swift text-4xl font-bold'>{mainTitle}</h2>
            <p className="text-xl pt-5">{subTitle}</p>
        </div>
    );
};

export default Title;