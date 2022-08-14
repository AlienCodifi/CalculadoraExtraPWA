const initialState = {
    OctanajeExtra:95,
    OctanajeCorriente:85,
    OctanajeDeseado: 91,
    PrecioGalonExtra:18000,
    PrecioGalonCorriente:9000,
    PrecioTotalExtra:50000,
    PrecioTotalCorriente:0,
    GalonesExtra:0,
    GalonesCorriente:0,
    TotalGalones:0,
    Results:false
}

export default (state = initialState, action) => {
    console.log(state);
    const { payload, type } = action;
    switch (action.type) {
        case "UPDATE_VALUE": {
            console.log(payload.Field,payload.Value)
            return { ...state, [payload.Field]: parseFloat(payload.Value?payload.Value:0)}
        }
        case "CALCULATE_VALUE": {
            let galExtra=state.PrecioTotalExtra/state.PrecioGalonExtra;
            let galCorr=(galExtra*(state.OctanajeExtra-state.OctanajeDeseado))/(state.OctanajeDeseado-state.OctanajeCorriente);
            let TotalCorr=galCorr*state.PrecioGalonCorriente;
            let TotalGalones=galCorr+galExtra;
        
            return { ...state,
                PrecioTotalCorriente:TotalCorr.toFixed(0),
                GalonesExtra:galExtra.toFixed(2),
                GalonesCorriente:galCorr.toFixed(2),
                TotalGalones:TotalGalones.toFixed(2),
                Results:!state.Results}
        }
        default:
            return {...state,initialState};
    }
} 