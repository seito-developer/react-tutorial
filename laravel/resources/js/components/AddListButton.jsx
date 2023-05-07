import React, { Component } from 'react';
import { createList } from '../api/index';

class AddListButton extends Component {
  handleAddList = async () => {
    const title = prompt('Enter list title');
    if (title) {
      const newList = await createList(title);
      // リストを追加した後の処理をここに記述（例：追加したリストを表示）
    }
  };

  render() {
    return (
      <button className="add-list-button" onClick={this.handleAddList}>
        Add List
      </button>
    );
  }
}

export default AddListButton;