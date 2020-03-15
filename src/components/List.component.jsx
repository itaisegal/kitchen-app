import React from 'react';
import ListItem from './ListItem.component';

function List(props) {
  const icon = props.icon;
  const title = props.title;

  return (
    <div className='list'>
      <div className='list__header'>
        {icon} <span className='title'>{title}</span>{' '}
        <button className='addItem'>+</button>
      </div>
      <div className='list__content'>
        <ListItem title='item' />
      </div>
    </div>
  );
}

export default List;
