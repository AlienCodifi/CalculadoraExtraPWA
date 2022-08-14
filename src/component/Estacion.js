import React from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';


function Estacion(props) {

    return (

        <Paper elevation={3} className='Estacion' style={{ borderColor: props.backColor }}>
            <div className='OilType' style={{ color: props.backColor }}> {props.Title}</div>

            <TextField fullWidth className='OctanoInput' id="fullWidth" type="number" defaultValue={props.Octanaje.toString()} 
            onChange={(event)=>props.func(props.Title==="Extra"?"OctanajeExtra":"OctanajeCorriente",event.target.value)}
            />

            <div className='OctanosLabel' style={{ color: '#666666',textAlign:'center' }}>OCTANOS</div>

            <TextField
                id="filled-number"
                label="Precio por Galon"
                defaultValue={props.PrecioGalon.toString()}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(event)=>props.func(props.Title==="Extra"?"PrecioGalonExtra":"PrecioGalonCorriente",event.target.value)}
            />
            <TextField
                id="filled-number"
                label="Total a Pagar"
                value={props.Total.toString()}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                disabled={props.Title==="CORRIENTE"?true:false}
                onChange={(event)=>props.func(props.Title==="Extra"?"PrecioTotalExtra":"PrecioTotalCorriente",event.target.value)}
            />

        </Paper>

    )
}

export default Estacion