export const incrementAction=()=>{
    return{
        type: "INCREMENT",
    }
}
export const decrementAction=()=>{
    return{
        type: "DECREMENT",
    }
}
export const setIncrementValueAction=(value)=>{
    return{
        type: "SET_INPUT",
        payload:value
    }
}
export const setIncrementValueAction1=(value)=>{
    return{
        type: "SET_INPUT1",
        payload1:value
    }
}
export const incrementByUser=(value)=>{
    return{
        type: "INPUT_BY_USER",
        payload:value
    }
}
export const bolme=(value)=>{
    return{
        type: "BOLME_BY_USER",
        payload:value
    }
}
export const vurma=(value)=>{
    return{
        type: "VURMA_BY_USER",
        payload:value
    }
}