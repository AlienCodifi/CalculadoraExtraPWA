import React from 'react';
import './App.css';
import './Components.css';
import Estacion from './component/Estacion';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import HeaderComp from './component/HeaderComp';
import ResultsDashboard from './component/ResultsDashboard';
import { UPDATE_VALUE, CALCULATE_VALUE } from './store/actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { estado: state.GasolinaReducer }
};

function App({ estado, UPDATE_VALUE, CALCULATE_VALUE }) {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1, height: '100%' }}>
        <div style={{ height: '100vh' }}>
          <HeaderComp />
          <div style={{ margin: '0 20px' }}>
            <div className='flexEstacionContainers'>
              <Estacion Title={"EXTRA"} backColor={"#512DA8"} func={UPDATE_VALUE} Octanaje={estado.OctanajeExtra} PrecioGalon={estado.PrecioGalonExtra} Total={estado.PrecioTotalExtra}/>
              <Estacion Title={"CORRIENTE"} backColor={"#2ec4b6"} func={UPDATE_VALUE} Octanaje={estado.OctanajeCorriente} PrecioGalon={estado.PrecioGalonCorriente} Total={estado.PrecioTotalCorriente} />
            </div>

            <TextField
              fullWidth
              id="filled-number"
              label="Octanaje Promedio Deseado"
              defaultValue={estado.OctanajeDeseado.toString()}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button variant="contained" style={{ margin: '20px 0', width: '100%' }}
             onClick={() => {CALCULATE_VALUE()
            }}
            >CALCULAR GASOLINA</Button>
            <div style={{ flexGrow: 1 }}>
              <ResultsDashboard estado={estado} />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default connect(mapStateToProps, { UPDATE_VALUE, CALCULATE_VALUE })(App)
