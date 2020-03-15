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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a
            fugiat sed numquam consequatur necessitatibus magnam quidem ad
            deserunt eum atque, harum earum, beatae quasi accusantium dolorem
            velit rem in?
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default ListItem;
