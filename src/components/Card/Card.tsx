import React from 'react';
import {Card as PanelCard, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {BaseComponent} from 'components/Common/BaseComponent';

export class Card extends BaseComponent {
    render() {
        let props = this.props;

        return [
            <br/>,
            <PanelCard>
                <CardHeader
                    title={props.name}
                    subtitle={props.author.name}
                    avatar={props.author.avatar}
                />
                <CardMedia>
                    <img src={props.image} alt=""/>
                </CardMedia>
                <CardText>{props.description}</CardText>
            </PanelCard>
        ];
    }
}
