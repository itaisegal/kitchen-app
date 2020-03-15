import React from 'react';
import ListItem from './ListItem.component';
import {
  SortableContainer,
  SortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const DragHandle = sortableHandle(() => <span>::</span>);
const SortableItem = SortableElement(({ value }) => (
  <li>
    <DragHandle />
    {value}
  </li>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: props.icon,
      title: props.title,
      items: [
        <ListItem title='item' />,
        <ListItem title='item' />,
        <ListItem title='item' />,
        <ListItem title='item' />,
      ],
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  render() {
    return (
      <div className='list'>
        <div className='list__header'>
          {this.state.icon} <span className='title'>{this.state.title}</span>{' '}
          <button className='addItem'>+</button>
        </div>
        <div className='list__content'>
          <SortableList
            items={this.state.items}
            onSortEnd={this.onSortEnd}
            useDragHandle={true}
          />
        </div>
      </div>
    );
  }
}

export default List;
