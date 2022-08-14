const UPDATE_VALUE =(Field,Value)=>{
    return{
        type:"UPDATE_VALUE",
        payload:{Field,Value}
    }
}

const CALCULATE_VALUE =(Field,Value)=>{
    return{
        type:"CALCULATE_VALUE",
        payload:{Field,Value}
    }
}

export{UPDATE_VALUE,CALCULATE_VALUE}