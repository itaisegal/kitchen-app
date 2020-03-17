import React from 'react';

class ListItem extends React.Component {
  state = {
    ...this.props,
    active: false,
  };

  render() {
    return (
      <div className='list__item'>
        <button className='title'
          onClick={() => {
            this.setState({ active: !this.state.active });
          }}
        >
          {this.state.title}
        </button>
        {this.state.active ? (
          <div className='content'>
            {this.state.content}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default ListItem;
