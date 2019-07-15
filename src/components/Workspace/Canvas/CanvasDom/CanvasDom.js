import React from "react";
import Movimientos from "./Movimientos/Movimientos";
import Aclaraciones from "./Aclaraciones/Aclaraciones";
import Recargas from "./Recargas/Recargas";
class CanvasDom extends React.Component{

    render(){
        if(this.props.seleccion === 0){
            return <Movimientos></Movimientos>
        }else if(this.props.seleccion === 1){
            return <Aclaraciones></Aclaraciones>
        }else if(this.props.seleccion === 2){
            return <Recargas></Recargas>
        }
    }
}
export default CanvasDom;