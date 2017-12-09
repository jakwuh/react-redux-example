import React from 'react';
import {Card as PanelCard, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {BaseComponent} from 'components/Common/BaseComponent';
import {Link} from 'react-router-dom'
import {completeCourse} from 'entities/Course/actions';

export class Card extends BaseComponent {
    completeCourse() {
        let {dispatch} = this.context;
        let {card} = this.props;

        dispatch(completeCourse(card));
    }

    render() {
        let {card, full} = this.props;

        return <div>
            <br/>
            <Link to={`/courses/${card.id}`}>
                <PanelCard style={{background: card.completed ? '#1abc9c' : 'white'}}>
                    <CardHeader
                        title={card.name}
                        subtitle={card.author.name}
                        avatar={card.author.avatar}
                    />
                    {full && <CardMedia>
                        <img src={card.image} alt=""/>
                    </CardMedia>}
                    <CardText>{card.description}</CardText>
                    {full && !card.completed && <CardActions>
                        <FlatButton label="Complete course" onClick={() => this.completeCourse()}/>
                    </CardActions>}
                </PanelCard>
            </Link>
        </div>
    }
}
