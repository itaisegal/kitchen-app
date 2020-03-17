import React from 'react';
import List from './List.component';

function lists(props) {
  const state = props.listData;
  const listData = state.listData;
  const USER_DATA = listData.map((option) => option.data.items);
  return (
    <div className='lists'>
      {listData.map((option, index) => {
        return (
          <List
            icon={option.icon}
            title={option.name}
            key={index}
            data={USER_DATA[index]}
          />
        );
      })}
    </div>
  );
}

export default lists;
