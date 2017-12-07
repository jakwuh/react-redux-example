import * as React from 'react';
import {BaseComponent} from 'answers/components/Common/BaseComponent/BaseComponent';

const ID = 'restoreData';

interface DocumentRestoreDataProps {
    restoreData: Dict
}

export class DocumentRestoreData extends React.Component<DocumentRestoreDataProps> {

    render() {
        return (
            <script id={ID} type='application/json'>
                {JSON.stringify(this.props.restoreData)}
            </script>
        );
    }

    static getRestoreData(): Dict {
        let element = document.getElementById(ID);

        if (!element) {
            return {};
        }

        let doc = new DOMParser().parseFromString(element.textContent || '', 'text/html');
        let text = doc.documentElement.textContent;

        if (!text) {
            return {};
        }

        return JSON.parse(text);
    }

}
