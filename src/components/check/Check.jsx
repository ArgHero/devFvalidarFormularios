import "./Check.css"
//import { useState } from "react";

function Check(props){
    const {interes,grupo,checked,handleCheck} = props;
    
    return(
    <div className="text-start m-1">
        <input 
            type="checkbox" 
            name={grupo} 
            id={"chk"+interes} 

            checked={checked} 
            onChange={()=>handleCheck(interes)}
        />
        <label htmlFor={"chk"+interes}>{interes}</label>
    </div>
    )
}

export default Check