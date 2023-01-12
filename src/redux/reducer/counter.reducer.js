const initialValue = {
    count:0 ,
    inputValue: "",
    inputValue1: ""

    



}

export const counterReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            }
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            }
        case "SET_INPUT":
            return {
                ...state,
                inputValue: action.payload,


            }

        case "SET_INPUT1":
            return {
                ...state,
                inputValue1: action.payload1,
            }
        case "INPUT_BY_USER":
            return {
                ...state,
                count: state.count + Number(action.payload),

                


            }
        case "BOLME_BY_USER":
            return {
                ...state,
                 count :Number(action.payload1) / Number(action.payload)
                

            }
        case "VURMA_BY_USER":
            return {
                ...state,
                count: state.count * Number(action.payload),
                
            }

        default:
            return state;
    }
}