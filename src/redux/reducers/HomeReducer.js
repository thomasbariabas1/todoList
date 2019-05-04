import {ActionCreator} from "../../lib/ActionCreator";

const constants = {}

constants.ADD_TODO = 'home/ADD_TODO'
constants.DELETE_TODO = 'home/DELETE_TODO'
constants.COMPLETE_TODO = 'home/COMPLETE_TODO'
constants.EDIT_TODO = 'home/EDIT_TODO'

const addToDoAction = ActionCreator(constants.ADD_TODO)
const deleteToDoAction = ActionCreator(constants.DELETE_TODO)
const completeToDoAction = ActionCreator(constants.COMPLETE_TODO)
const editToDoAction = ActionCreator(constants.EDIT_TODO)

const addToDo = () => (dispatch, getState) => {

    //Create New array so we don't mutate the state
    const toDos = [...getState().HomeReducer.toDos]

    const newTodo = toDos.length>0?{id: toDos.reverse()[0].id + 1, value: '', checked: false}:{id: 0, value: '', checked: false}
    dispatch(addToDoAction(newTodo))
}

const deleteToDo = (id) => (dispatch, getState) => {
    //Create New array so we don't mutate the state
    const toDos = [...getState().HomeReducer.toDos]

    dispatch(deleteToDoAction(toDos.filter(todo=>todo.id!==id)))
}

const completeToDo = (id) => (dispatch, getState) => {
    //Create New array so we don't mutate the state
    const toDos = [...getState().HomeReducer.toDos]

    dispatch(completeToDoAction(toDos.map(todo=>{
        if(todo.id===id)
            todo.checked = !todo.checked
        return todo
    })))
}

const editToDo = (id, value) => (dispatch, getState) => {
    //Create New array so we don't mutate the state
    const toDos = [...getState().HomeReducer.toDos]

    dispatch(editToDoAction(toDos.map(todo=>{
        if(todo.id===id)
            todo.value = value
        return todo
    })))
}


export const actions = {
    addToDo,
    deleteToDo,
    completeToDo,
    editToDo
}

const initialState = {
    toDos: [
        {
            id: 0,
            value: 'Get Milk',
            checked: true
        },
        {
            id: 1,
            value: 'Get Bread',
            checked: false

        },
        {
            id: 2,
            value: 'Get Cola',
            checked: true

        }

    ],
}

const HomeReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case constants.ADD_TODO:
            return {...state, toDos: [...state.toDos, payload]}
        case constants.EDIT_TODO:
        case constants.DELETE_TODO:
        case constants.COMPLETE_TODO:
            return {...state, toDos: payload}
        default:
            return state
    }
}

export default HomeReducer