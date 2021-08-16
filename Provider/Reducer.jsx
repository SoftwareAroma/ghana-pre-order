import actionTypes from '../Utils/Utils';

export const initialState = {
    user: null,
    theme: false,
    isDrawerOpen: false,
    basket: [],
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }
        case actionTypes.SET_THEME:
            return {
                ...state,
                theme: action.theme,
            }
        case actionTypes.OPEN_DRAWER:
            return {
                ...state,
                isDrawerOpen: action.isDrawerOpen,
            }
        case actionTypes.ADD_TO_BASKET:
            return{
                ...state,
                basket: [...state.basket, action.item],
            }
        case actionTypes.REMOVE_FROM_BASKET:
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not found in Basket`
                );
            }
            return {
                ...state,
                basket: newBasket
            }
        case actionTypes.EMPTY_BASKET:
            return{
                ...state,
                basket: [],
            }
        default:
            return state;

    }
}

export default reducer;