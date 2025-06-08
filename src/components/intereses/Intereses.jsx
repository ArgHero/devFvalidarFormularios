import "./Intereses.css"
import Check from "../check/Check"
import { useState,useEffect } from "react"

function Intereses(props){

    const[selectedChecks,setSelectedChecks] = useState({
        comida: false,
        guarderia: false,
        acompanantes: false,
        fotografia: false,
        musica: false,
        vestimenta: false
    })

    function handleCheck(interes){
        setSelectedChecks(
            (interesPrevio)=>({
                ...interesPrevio,
                [interes]:!interesPrevio[interes]
            })
        )//setSelectedChecks()   
    }//handleCheck()

    //Se ejecuta al guardar un cambio en el select
    useEffect(()=>{

    },[selectedChecks])


    return(
        <>
        <p className="m-0">Intereses</p>
        <div className="d-flex flex-row justify-content-around  flex-wrap gap-1 bg-dark text-white">
            {Object.keys(selectedChecks).map(interes=>
                <Check 
                    interes={interes} 
                    key={interes}
                    grupo="intereses"
                    isChecked={selectedChecks[interes]}
                    handleCheck={handleCheck}
                />
            )}
        </div>
        </>
        
    )
}

export default Intereses