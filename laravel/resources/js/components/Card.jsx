import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { card } = this.props;
    return (
      <div className="card">
        <p>{card.title}</p>
      </div>
    );
  }
}

export default Card;