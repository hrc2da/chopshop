import React from 'react';
import {Radar} from 'react-chartjs-2';

const _labels = ['Material Cost', 'Fuel Cost', 'Distance', 'Hazard']

let CarRadar = ({labels,values,config,gas,reward,grass,title})=>{
    let data = {
        labels: labels,
        datasets: [
            {
                label: title,
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: values
            }
        ],
        
    }
    return <Radar data={data} options={{scale:{ticks:
        {
            userCallback: (value,index,values)=>''
        }
    }}} />
}

export default CarRadar;