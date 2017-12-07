import * as React from 'react';
import {Card} from 'components/Card/Card';

export function CardsList(props) {
    return props.cards.map(card => {
        return <Card key={card.id} {...card}/>
    });
}
