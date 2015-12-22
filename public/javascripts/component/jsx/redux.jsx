/**
 * Created by Administrator on 2015/12/21.
 */
import {createStore,combineReducers} from 'redux';

import {Provider} from 'react-redux';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

class App extends Component{

}