import React, { Component } from 'react';
import Card from './Card';
import AddCardButton from './AddCardButton';

class List extends Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    const { list } = this.props;
    this.setState({ cards: list.cards });
  }

  handleAddCard = (newCard) => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, newCard],
    }));
  };

  render() {
    const { list } = this.props;
    const { cards } = this.state;
    return (
      <div className="list">
        <h2>{list.title}</h2>
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
        <AddCardButton listId={list.id} onAddCard={this.handleAddCard} />
      </div>
    );
  }
}

export default List;