import React from 'react';
import { Component } from 'react';

import Header from './Header';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: [],
    };
    
    this.onDeleteClick = this.onDeleteClick.bind(this); 
    this.onAddClick = this.onAddClick.bind(this);
  }
  
  onAddClick(newItem) {
    this.setState({
      items: this.state.items.concat([newItem])
    });
  }
  
  onDeleteClick(id) {
    const newItems = this.state.items.slice();
    const index = newItems.map(x => x.id).indexOf(id);
    newItems.splice(index, 1);
    this.setState({ items: newItems });
  }
  
  render() {
    console.log();
    return (
      <div className="text-center">
        <h1>My Reactive Todo List</h1>
        <Header add={this.onAddClick} />
        <List items={this.state.items} delete={this.onDeleteClick} />
      </div>
    );
  }
}
