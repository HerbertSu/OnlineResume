import {createStore} from 'redux';

import reducer from './reducers/reducers';

let initialState = {
    user : {
        name: 'Will',
        age : 35
    },
    tweets: []
};

const store = createStore(reducer, initialState);

store.subscribe(()=>{
    console.log("store changed ", store.getState())
});

export default store;
