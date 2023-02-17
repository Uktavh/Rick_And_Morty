import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types"

const initialState = {
    favorites: []
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                favorites: [
                    ...state.favorites, action.payload
                ]           }
                case DELETE_FAVORITE:
                    return{
                        ...state,
                        favorites: state.favorites.filter (chara => chara.id !== action.payload)        }

        default:
            return{...state}
    }
}

export default reducer