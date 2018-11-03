import * as React from 'react';
import { css } from 'glamor';


import * as cardHelpers from '../../services/cardHelpers';

class Card extends React.PureComponent<Props> {
  public state = { 
    isSelected: false
  };
  render() {
    const { cardId } = this.props;

    return (
      <img
        className={`card=${cardId} ` + cardStyle.toString()}
        src={cardHelpers.getPictureUrlFromCardId(cardId)}
        alt={cardHelpers.getCardNameFromCardId(cardId)}
      />
    );
  }
}

interface Props {
  cardId: number
}

const cardStyle = css({
  width: '10%',
});

export default Card;