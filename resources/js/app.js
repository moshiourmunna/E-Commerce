
require('./components/Index');

import ReactDOM from 'react-dom'
import Index from "./components/Index";

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
