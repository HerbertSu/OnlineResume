import {combineReducers} from "redux";

const userReducer = (state={name : '', age : null}, action) => {
    switch(action.type){
        case "CHANGE_AGE":
            state = {...state, age : action.payload};
            break;
        case "CHANGE_NAME":
            state = {...state, name : action.payload};
            break;
    };
    return state;
};

const tweetsReducer = (state=[], action) => {
    switch(action.type){
        case "NEW_TWEET":
            state = state.concat(action.payload);
            break;
        case "CHANGE_AGE":
            state = state.concat(action.payload);
            break;
    };
    return state;
};

const reducer = combineReducers({
    user : userReducer,
    tweets : tweetsReducer,
});

export default reducer;