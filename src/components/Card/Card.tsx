import React from 'react';
import {Card as PanelCard, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {BaseComponent} from 'components/Common/BaseComponent';
import {Link} from 'react-router-dom'

export class Card extends BaseComponent {
    render() {
        let props = this.props;

        return <div>
            <br/>
            <Link to={`/courses/${props.id}`}>
                <PanelCard style={{background: props.completed ? 'green' : 'white'}}>
                    <CardHeader
                        title={props.name}
                        subtitle={props.author.name}
                        avatar={props.author.avatar}
                    />
                    {props.full && <CardMedia>
                        <img src={props.image} alt=""/>
                    </CardMedia>}
                    <CardText>{props.description}</CardText>
                    {props.full && !props.completed && <CardActions>
                        <FlatButton label="Complete course"/>
                    </CardActions>}
                </PanelCard>
            </Link>
        </div>
    }
}
