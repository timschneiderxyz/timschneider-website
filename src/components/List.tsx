/*  ========================================================================
    # Components - List
    ========================================================================  */

// Dependencies
import React from 'react';

// Types
interface ListProps {
  title?: string;
  items: string[];
}

const List = ({ title, items }: ListProps) => {
  return (
    <div className='mt-8'>
      {title ? <h3 className='text-2xl mb-4'>{title}</h3> : null}
      <ul className='grid grid-cols-[repeat(auto-fit,200px)] gap-y-2 gap-x-12 pl-8 list-square'>
        {items.map((item, index) => (
          <li key={index} className='marker:text-tim-primary'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
