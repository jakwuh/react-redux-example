import ReactDOM from 'react-dom';
import {DocumentRestoreData} from 'components/Document/DocumentRestoreData';
import {createStore} from 'entries/common';
import {renderDom} from 'libs/utils/renderDom';

let data = DocumentRestoreData.getRestoreData();
let store = createStore(data);

let dom = renderDom(store);

ReactDOM.hydrate(dom, document);

store.subscribe(() => ReactDOM.render(dom, document));
