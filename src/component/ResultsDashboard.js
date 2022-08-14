import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../Components.css';
ChartJS.register(ArcElement, Tooltip, Legend);

function ResultsDashboard(props) {
    return (
        <div className='DashboardContainer' >
            <div style={{flex:1,maxWidth:'50%',height:'100%'}}>
                <h4>Extra ({(100 * props.estado.GalonesExtra / props.estado.TotalGalones).toFixed(1)}%)</h4>
                
                <p>{props.estado.GalonesExtra}</p>
                <h5>Galones</h5>
                <h4>Corriente ({(100 - (100 * props.estado.GalonesExtra / props.estado.TotalGalones)).toFixed(1)}%)</h4>
                
                <p>{props.estado.GalonesCorriente}</p>
                <h5>Galones</h5>
            </div>
            <div style={{flex:1,maxWidth:'50%',height:'100%'}}>
            <Doughnut
                data={{
                    labels: ['Extra', 'Corriente'],
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [props.estado.GalonesCorriente, props.estado.GalonesExtra],
                            backgroundColor: [
                                '#512DA8',
                                '#2ec4b6',

                            ],

                            borderWidth: 0,
                        },
                    ],
                }} />
                </div>
        </div>
    )
}

export default ResultsDashboard