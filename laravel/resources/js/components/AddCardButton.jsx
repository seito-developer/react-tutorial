import React, { Component } from 'react';
import { addCard } from '../api';

class AddCardButton extends Component {
  handleAddCard = async () => {
    const { listId, onAddCard } = this.props;
    const title = prompt('Enter card title');
    if (title) {
      const newCard = await addCard(listId, title);
      // カードを追加した後の処理をここに記述（例：追加したカードを表示）
      onAddCard(newCard);
    }
  };

  render() {
    return (
      <button className="add-card-button" onClick={this.handleAddCard}>
        Add Card
      </button>
    );
  }
}

export default AddCardButton;