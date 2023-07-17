export const initialState={
    basket:[],
};

// selector
export const getBasketTotal=(basket)=>
    basket?.reduce((amount,item)=>parseInt(item.price.replace(/,/g, ""), 10)+amount,0);

const reducer=(state,action)=>{

    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket,action.item],
            };
            default:return state;
    }
};

export default reducer;