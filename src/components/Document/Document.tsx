import * as React from 'react';
import {BaseComponent} from 'components/Common/BaseComponent';
import {DocumentHead} from 'components/Document/DocumentHead';
import {CardsList} from 'components/Card/CardsList';
import {Switch, Route} from 'react-router-dom'
import {Card} from 'components/Card/Card';
import {DocumentRestoreData} from 'components/Document/DocumentRestoreData';

export class Document extends BaseComponent {

    render() {
        let {state} = this.context;

        let CardsListRoute = () => (
            <CardsList {...state}/>
        );

        let CardRoute = ({match: {params: {id}}}) => (
            <Card full {...state.cards.find(card => +card.id === +id)}/>
        );

        return (
            <html>
            <head>
                <meta charSet="utf8"/>
                <meta name="viewport" content="width=device-width"/>
                <title>Courchera</title>
                {IS_SERVER && <link rel="stylesheet" href="/assets/styles.css"/>}
            </head>
            <body>
            <DocumentHead/>
            <Switch>
                <Route path="/courses/:id" component={CardRoute}/>
                <Route component={CardsListRoute}/>
            </Switch>
            {IS_SERVER && <DocumentRestoreData restoreData={state}/>}
            {IS_SERVER && <script src="/assets/index.js"/>}
            </body>
            </html>
        )
    }

}
