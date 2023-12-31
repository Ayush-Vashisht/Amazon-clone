export const initialState={
    basket:[],
    user:null
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
        case "REMOVE_FROM_BASKET":
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id
            );
            let newBasket=[...state.basket];

            if(index>=0){
                newBasket.splice(index,1);
            }
            else {
                console.warn(`Can't remove product (id: ${action.id}) as it is not in the basket!`)
            }
            return{
                ...state,
                basket:newBasket,
            }
        case "EMPTY_BASKET":
           return{
            ...state,
            bakset:[],
           }
            case "SET_USER":
                // console.log("user")
            return {
                ...state,
                user:action.user,
            }
           
        default:
            return state;
        
    }
};

export default reducer;