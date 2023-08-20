import React from 'react';

const CategoryCard = ({category}) => {
      const {name, description} = category
      return (
            <div className='p-4 my-2'>
                 <h3 className='text-[18px] font-semibold text-gray-500'>{name}</h3> 
                 <p>{description}</p>
            </div>
      );
};

export default CategoryCard;