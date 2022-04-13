interface IProductsState {
    products: any[]
}

const initialState: IProductsState = {
    products: [],
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS_START':
            return {
                ...state,
                products: [],
            }
        case 'GET_ALL_PRODUCTS_SUCCESS':
            return {
                ...state,
                products: action.payload,
            }
        case 'GET_ALL_PRODUCTS_FAILURE':
            return {
                ...state,
                products: [],
            }
        default:
            return state
    }
}

export default reducer;