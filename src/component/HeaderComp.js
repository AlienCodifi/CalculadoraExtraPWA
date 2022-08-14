import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './logoapp.png'

export default function ButtonAppBar() {
  return (
    <Box sx={{flex:1}}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} style={{width:'30px',paddingRight:'1 0px '}} alt="logo"/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Calculadora de Combustible
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
