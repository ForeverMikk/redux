import { createStore } from 'redux';


const reducerFunction = (state = { counter: 0 }, action) => {
    // Limitaciones de las react reducer funtions
    // Deben ser funciones sincronas
    // No se debe modificar el estado original

    if(action.type === "INC") {
        return {counter: state.counter + 1}
    }
    if(action.type === "DEC") {
        return {counter: state.counter - 1}
    }
    if(action.type === "ADD") {
        return {counter: state.counter + action.payload}
    }

    return state;
};

const store = createStore(reducerFunction);




export default store;