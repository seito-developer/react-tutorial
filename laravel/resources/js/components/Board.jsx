import React, { Component } from 'react';
import List from './List';
import AddListButton from './AddListButton';
import { fetchLists } from '../api';

class Board extends Component {
  state = {
    lists: [],
  };

  async componentDidMount() {
    const lists = await fetchLists();
    this.setState({ lists });
  }

  render() {
    const { lists } = this.state;
    return (
      <div className="board">
        {lists.map(list => (
          <List key={list.id} list={list} />
        ))}
        <AddListButton />
      </div>
    );
  }
}

export default Board;