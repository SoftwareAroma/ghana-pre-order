
/* The possible state action types available to us, edit this object to add or remove a state action type */
const actionTypes = {
    SET_USER : "SET_USER", // set the user
    SET_THEME : "SET_THEME", // set the theme (dark===true, light===false)
    OPEN_DRAWER: "OPEN_DRAWER", // open the side bar (opened===true, closed===false)
    ADD_TO_BASKET: "ADD_TO_BASKET", // add item to basket
    REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET", // remove product from basket
    EMPTY_BASKET: "EMPTY_BASKET" // remove all items from basket
}

export default actionTypes;