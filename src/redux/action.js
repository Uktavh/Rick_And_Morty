import { ADD_FAVORITE,DELETE_FAVORITE } from "./action-types";

export const addFavorite = (chara) => {
    return {type: ADD_FAVORITE, payload: chara}
}

export const deleteFavorite = (id) => {
    return {type: DELETE_FAVORITE, payload: id}
}