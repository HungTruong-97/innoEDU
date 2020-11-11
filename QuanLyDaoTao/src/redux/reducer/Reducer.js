import { combineReducers } from 'redux';
import CONST from '../../common/Const';

const INITIAL_STATE_LOGIN = {
    loginState: CONST.STATE_LOGIN_IDLE,
    infoUser: {},
    token: "",
    isChangeAvatar: false,
    currentSemester: {},
    admissionRecords: {}
};

const reducerLogin = (state = INITIAL_STATE_LOGIN, action) => {
    switch (action.type) {
        case CONST.ACTION_LOGIN_REQUEST:
            return { ...state, loginState: CONST.STATE_LOGIN_TRYING };
        case CONST.ACTION_LOGIN_RESPONSE_SUCCESS:
            return {
                ...state,
                loginState: CONST.STATE_LOGIN_SUCCESS,
                infoUser: action.infoUser,
                token: action.token,
                currentSemester: action.currentSemester,
                admissionRecords: action.admissionRecords
            };
        case CONST.ACTION_CHANGE_AVATAR_SUCCESS:
            return { ...state, isChangeAvatar: true };
        case CONST.ACTION_CHANGE_AVATAR_READY:
            return { ...state, isChangeAvatar: false };
        case CONST.ACTION_LOGIN_RESPONSE_FAIL:
            return { ...state, loadingState: CONST.ACTION_LOGIN_RESPONSE_FAIL };
        default:
            return { ...state };
    }
};



const INITIAL_STATE_SCHEDULE = {
    scheduleState: CONST.STATE_GET_SCHEDULE_IDLE,
    schedule: []
};

const reducerSchedule = (state = INITIAL_STATE_SCHEDULE, action) => {
    switch (action.type) {
        case CONST.ACTION_GET_SCHEDULE_REQUEST:
            return { ...state, scheduleState: CONST.STATE_GET_SCHEDULE_TRYING };
        case CONST.ACTION_GET_SCHEDULE_RESPONSE_SUCCESS:
            return {
                ...state,
                scheduleState: CONST.STATE_GET_SCHEDULE_SUCCESS,
                schedule: action.schedule
            };
        case CONST.ACTION_GET_SCHEDULE_RESPONSE_FAIL:
            return { ...state, scheduleState: CONST.STATE_GET_SCHEDULE_FAIL };
        default:
            return { ...state }
    }
};

const INITIAL_STATE_CHANGE_SCREEN = {
    changeScreenState: CONST.STATE_CHANGE_SCREEN_IDLE,
    date: "",
};

const reducerChangeScreen = (state = INITIAL_STATE_CHANGE_SCREEN, action) => {
    switch (action.type) {
        case CONST.ACTION_GOTO_SCREEN_SCHEDULE:
            return {
                ...state,
                changeScreenState: CONST.STATE_CHANGE_SCREEN_TRYING,
                date: action.date
            };
        case CONST.ACTION_CHANGE_SCREEN_RESPONSE_SUCCESS:
            return {
                ...state,
                changeScreenState: CONST.STATE_CHANGE_SCREEN_SUCCESS
            };
        default:
            return { ...state }
    }
};

const INITIAL_STATE_LIST_SUBJECT = {
    listSubject: [],
    getSubjectsState: CONST.STATE_GET_SUBJECTS_IDLE
}

const reducerSubjects = (state = INITIAL_STATE_LIST_SUBJECT, action) => {
    switch (action.type) {
        case CONST.ACTION_GET_SUBJECTS_REQUEST:
            return { ...state, getSubjectsState: CONST.STATE_GET_SUBJECTS_TRYING };
        case CONST.ACTION_GET_SUBJECTS_RESPONSE_SUCCESS:
            return {
                ...state,
                getSubjectsState: CONST.STATE_GET_SUBJECTS_SUCCESS,
                listSubject: action.listSubject
            };
        case CONST.ACTION_GET_SUBJECTS_RESPONSE_FAIL:
            return { ...state, getSubjectsState: CONST.STATE_GET_SUBJECTS_FAIL };
        default:
            return { ...state };
    }
}

const INITIAL_STATE_LIST_REGISTERED = {
    listRegistered: [],
    getRegisteredState: CONST.STATE_GET_LIST_REGISTERED_IDLE
}

const reducerListRegistered = (state = INITIAL_STATE_LIST_REGISTERED, action) => {
    switch (action.type) {
        case CONST.ACTION_GET_LIST_REGISTERED_REQUEST:
            return { ...state, getRegisteredState: CONST.STATE_GET_LIST_REGISTERED_TRYING };
        case CONST.ACTION_GET_LIST_REGISTERED_RESPONSE_SUCCESS:
            return {
                ...state,
                getRegisteredState: CONST.STATE_GET_LIST_REGISTERED_SUCCESS,
                listRegistered: action.listRegistered
            };
        case CONST.ACTION_GET_LIST_REGISTERED_RESPONSE_FAIL:
            return { ...state, getRegisteredState: CONST.STATE_GET_LIST_REGISTERED_FAIL };
        case CONST.ACTION_LIST_REGISTERED_CHANGE:
            return { ...state, getRegisteredState: CONST.STATE_LIST_REGISTERED_CHANGED };
        default:
            return { ...state };
    }
}

const INITIAL_STATE_LOADING = {
    loadingState: CONST.STATE_LOADING_STOPPED
};

const reducerLoading = (state = INITIAL_STATE_LOADING, action) => {
    switch (action.type) {
        case CONST.ACTION_LOADING_START:
            return { ...state, loadingState: CONST.STATE_LOADING_RUNNING };
        case CONST.ACTION_LOADING_STOP:
            return { ...state, loadingState: CONST.STATE_LOADING_STOPPED };
        default:
            return { ...state };
    }
};



const reducerAll = combineReducers({
    reducerLogin,
    reducerLoading,
    reducerSchedule,
    reducerChangeScreen,
    reducerSubjects,
    reducerListRegistered
});
export default reducerAll;
