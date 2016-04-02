import React, { Component } from 'react';

import ListItem from './ListItem';

export default class List extends Component {
  renderList() {
    return this.props.items.map((item) => {
      return <ListItem delete={this.props.delete} key={item.id} item={item} />
    });    
  }
  
  render() {
    return (
      <div>{this.renderList()}</div>
    );
  }
}
