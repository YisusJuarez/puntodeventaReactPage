import { createStore } from "redux";

const initialState = {
  tags: [],
  cuentas: [],
  seleccionado: "No seleccionado"
};

const reducer = (state = initialState, action) => {
    console.log(action)
    if(action.type === "Agregando_Seleccion"){
        return{
            seleccionado: action.select
        }
    }
  return state;
};

export default createStore(reducer);
