import { combineReducers } from 'redux';

// Auth
import { auth } from './auth/reducers';

// Users
import { users } from './users/reducers';

const rootReducer = combineReducers({
    auth,
    users,
});

export default rootReducer;
