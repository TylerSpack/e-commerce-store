export default function cartReducer(state = [], action) {
    let newCart = state;
    let productIndex;
    switch (action.type) {
        case "ADD_PRODUCT":
            if (state.some((product) => product.id === action.product.id)) {
                let productIndex = newCart.findIndex((product) => product.id === action.product.id);
                newCart[productIndex].quantity += 1;
                return newCart;
            } else {
                newCart.push({
                    id: action.product.id,
                    product: action.product,
                    quantity: 1
                });
                return newCart;
            }
        case "REMOVE_PRODUCT":
            productIndex = newCart.findIndex((product) => product.id === action.productId);
            newCart.splice(productIndex, 1);
            return newCart;
        case "CHANGE_CART_QUANTITY":
            productIndex = newCart.findIndex((product) => product.id === action.productId);
            newCart[productIndex].quantity += action.quantityAdjustment;
            if (newCart[productIndex].quantity > 0) {
                return newCart;
            } else {
                newCart.splice(productIndex, 1);
                return newCart;
            }
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }
}