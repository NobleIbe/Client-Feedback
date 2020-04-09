import { combineReducers } from 'redux';
import {reducer as reduxForm} from 'redux-form';
import authReducer from './authReducers';
import surveyReducer from './surveyReducers';


export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys:surveyReducer
});