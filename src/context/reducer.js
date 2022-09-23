export const actionType = {
    SET_USER: "SET_USER",
    SET_SOFTWARE_ITEMS: "SET_SOFTWARE_ITEMS",
    SET_CART_SHOW: "SET_CART_SHOW",
    SET_CART_ITEMS: "SET_CART_ITEMS"
}

export const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionType.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case actionType.SET_SOFTWARE_ITEMS:
            return {
                ...state,
                softwareItems: action.softwareItems,
            };

        case actionType.SET_CART_SHOW:
            return {
                ...state,
                cartShow: action.cartShow,
            };

        case actionType.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.cartItems,
            };

        default:
            return state;
    }

}