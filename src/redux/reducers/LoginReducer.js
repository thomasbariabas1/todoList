import {ActionCreator} from "../../lib/ActionCreator";

const constants = {}

constants.ADD_TODO = 'home/ADD_TODO'

const addToDoAction = ActionCreator(constants.ADD_TODO)

const addToDo = () => (dispatch, getState) => {
    dispatch(addToDoAction('testtt'))
}

export const actions = {
    addToDo
}

const initialState = {
    test: ''
}


const LoginReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state
    }
}

export default LoginReducer