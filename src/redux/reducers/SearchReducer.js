
import {ActionCreator} from "../../lib/ActionCreator";

const constants = {}

constants.SEARCH_TODO_CRITERIA = 'home/SEARCH_TODO_CRITERIA'

const searchToDoCritetiaAction =  ActionCreator(constants.SEARCH_TODO_CRITERIA)

const search = (value) =>(dispatch, getState) => {

    dispatch(searchToDoCritetiaAction(value))
}


export const actions = {
    search
}

const initialState = {

    searchCriteria:''
}


const SearchReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case constants.SEARCH_TODO_CRITERIA:
            return {...state, searchCriteria: payload}
        default:
            return state
    }
}

export default SearchReducer