import * as actionTypes from "../redux/actionTypes";
import DISHES from "../data/dishes";


export const addComment = (dishId, rating, author, comment) => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: author,
            rating: rating,
            comment: comment,
        }
    }
}

export const loadDishes = (dishes) => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishLoading = () => ({
    type: actionTypes.DISHES_LOADING
})

export const fetchDishes = () =>  dispatch => {
        dispatch(dishLoading());

        setTimeout(() => {
            dispatch(loadDishes(DISHES))
         }, 1000)

    }
 