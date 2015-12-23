/**
 * Created by Administrator on 2015/12/23.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/store/configureStore';
import Gallery from './Gallery';
const store = configureStore();
render(
    <Provider store={store}>
        <Gallery apiUrl='/api' column='5'/>
    </Provider>,
    $('.container')[0]
);