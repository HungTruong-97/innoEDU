//Const of App
export default {
    //Login-Logout------------------

    //Action
    ACTION_LOGIN_REQUEST:"ACTION_LOGIN_REQUEST",
    ACTION_LOGIN_RESPONSE_SUCCESS:"ACTION_LOGIN_RESPONSE_SUCCESS",
    ACTION_LOGIN_RESPONSE_FAIL:"ACTION_LOGIN_RESPONSE_FAIL",
    ACTION_LOGOUT:"ACTION_LOGOUT",
    ACTION_CHANGE_AVATAR_SUCCESS:"ACTION_CHANGE_AVATAR_SUCCESS",
    ACTION_CHANGE_AVATAR_READY:"ACTION_CHANGE_AVATAR_READY",
    //State
    STATE_LOGIN_IDLE:"STATE_LOGIN_IDLE",
    STATE_LOGIN_TRYING:"STATE_LOGIN_TRYING",
    STATE_LOGIN_SUCCESS:"STATE_LOGIN_SUCCESS",
    STATE_LOGIN_FAIL:"STATE_LOGIN_FAIL",


    //Get Schedule--------------

    //Action
    ACTION_GET_SCHEDULE_REQUEST:"ACTION_GET_SCHEDULE_REQUEST",
    ACTION_GET_SCHEDULE_RESPONSE_SUCCESS:"ACTION_GET_SCHEDULE_RESPONSE_SUCCESS",
    ACTION_GET_SCHEDULE_RESPONSE_FAIL:"ACTION_GET_SCHEDULE_RESPONSE_FAIL",
    //State
    STATE_GET_SCHEDULE_IDLE:"STATE_GET_SCHEDULE_IDLE",
    STATE_GET_SCHEDULE_TRYING:"STATE_GET_SCHEDULE_TRYING",
    STATE_GET_SCHEDULE_SUCCESS:"STATE_GET_SCHEDULE_SUCCESS",
    STATE_GET_SCHEDULE_FAIL:"STATE_GET_SCHEDULE_FAIL",

    //Change Screen---------

    //Action
    ACTION_GOTO_SCREEN_SCHEDULE:"ACTION_GOTO_SCREEN_SCHEDULE",
    ACTION_CHANGE_SCREEN_RESPONSE_SUCCESS:"ACTION_CHANGE_SCREEN_SUCCESS",
    //State
    STATE_CHANGE_SCREEN_IDLE:"STATE_CHANGE_SCREEN_IDLE",
    STATE_CHANGE_SCREEN_TRYING:"STATE_CHANGE_SCREEN_TRYING",
    STATE_CHANGE_SCREEN_SUCCESS:"STATE_CHANGE_SCREEN_SUCCESS",

    //Get list subject-------------
    
    //Action
    ACTION_GET_SUBJECTS_REQUEST:"ACTION_GET_SUBJECTS_REQUEST",
    ACTION_GET_SUBJECTS_RESPONSE_SUCCESS:"ACTION_GET_SUBJECTS_RESPONSE_SUCCESS",
    ACTION_GET_SUBJECTS_RESPONSE_FAIL:"ACTION_GET_SUBJECTS_REQUEST_RESPONSE_FAIL",

    //State
    STATE_GET_SUBJECTS_IDLE:"STATE_GET_SUBJECTS_IDLE",
    STATE_GET_SUBJECTS_TRYING:"STATE_GET_SUBJECTS_TRYING",
    STATE_GET_SUBJECTS_SUCCESS:"STATE_GET_SUBJECTS_SUCCESS",
    STATE_GET_SUBJECTS_FAIL:"STATE_GET_SUBJECTS_FAIL",

    //Get subject registered-------------
    
    //Action
    ACTION_GET_LIST_REGISTERED_REQUEST:"ACTION_GET_LIST_REGISTERED_REQUEST",
    ACTION_GET_LIST_REGISTERED_RESPONSE_SUCCESS:"ACTION_GET_LIST_REGISTERED_RESPONSE_SUCCESS",
    ACTION_GET_LIST_REGISTERED_RESPONSE_FAIL:"ACTION_GET_LIST_REGISTERED_RESPONSE_FAIL",
    ACTION_LIST_REGISTERED_CHANGE:"ACTION_LIST_REGISTERED_CHANGE",

    //State
    STATE_GET_LIST_REGISTERED_IDLE:"STATE_GET_LIST_REGISTERED_IDLE",
    STATE_GET_LIST_REGISTERED_TRYING:"STATE_GET_LIST_REGISTERED_TRYING",
    STATE_GET_LIST_REGISTERED_SUCCESS:"STATE_GET_LIST_REGISTERED_SUCCESS",
    STATE_GET_LIST_REGISTERED_FAIL:"STATE_GET_LIST_REGISTERED_FAIL",
    STATE_LIST_REGISTERED_CHANGED:"ACTION_LIST_REGISTERED_CHANGED",


    //Loading------------
    //Action
    ACTION_LOADING_START: "ACTION_LOADING_START",
    ACTION_LOADING_STOP: "ACTION_LOADING_STOP",
    //State
    STATE_LOADING_RUNNING: "STATE_LOADING_RUNNING",
    STATE_LOADING_STOPPED: "STATE_LOADING_STOPPED",

    URL:"http://ums-dev.husc.edu.vn/ptit/APIGateway/",
    ApplicationID:"TestApp ",
    SecretKey:   "123456"
};