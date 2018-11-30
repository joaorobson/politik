import React from 'react';
import {Radar} from 'react-chartjs-2';
import {Header} from 'semantic-ui-react';

const data = {
  labels: ["brasil", "economia", "criar", "combater", "desenvolvimento", "pais", "queremos", "brasileiros", "educacao", "governo", "paises", "politica", "nacional", "criacao", "empresas"],
  datasets: [
    {
      label: 'Amoêdo',
      backgroundColor: 'rgba(255,153,0,0.2)',
      borderColor: 'rgba(255,153,0,1)',
      pointBackgroundColor: 'rgba(255,153,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,153,0,1)',
      data: [32, 4, 5, 0, 6, 22, 16, 16, 12, 8, 5, 8, 0, 5, 0]
 
    },
    {
      label: 'Alckmin',
      backgroundColor: 'rgba(0,255,0,0.2)',
      borderColor: 'rgba(0,255,0,1)',
      pointBackgroundColor: 'rgba(0,255,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,255,0,1)',
      data: [20, 8, 6, 5, 5, 4, 0, 0, 4, 0, 0, 3, 0, 0, 0]
 
    },
    {
      label: 'Bolsonaro',
      backgroundColor: 'rgba(0,51,153,0.2)',
      borderColor: 'rgba(0,51,153,1)',
      pointBackgroundColor: 'rgba(0,51,153,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,51,153,1)',
      data: [45, 22, 0, 3, 11, 7, 3, 10, 17, 19, 17, 4, 12, 0, 9]
 
    },
    {
      label: 'Ciro',
      backgroundColor: 'rgba(255,255,0,0.2)',
      borderColor: 'rgba(255,255,0,1)',
      pointBackgroundColor: 'rgba(255,255,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,255,0,1)',
      data: [35, 12, 7, 0, 69, 28, 6, 6, 20, 23, 15, 51, 60, 56, 40]
 
 
    },
    {
      label: 'Haddad',
      backgroundColor: 'rgba(255,0,0,0.2)',
      borderColor: 'rgba(255,0,0,1)',
      pointBackgroundColor: 'rgba(255,0,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,0,0,1)',
      data: [82, 35, 16, 8, 89, 47, 0, 16, 50, 213, 18, 103, 116, 30, 20]
 
 
 
    }
  ]
};

class Chart extends React.Component{

  render() {
    return (
      <div >
        <Radar data={data} />
      </div>
    );
  }
};

export default Chart;

