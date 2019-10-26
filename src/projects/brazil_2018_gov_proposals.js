import React from 'react';
import BarChart from './chart';


class chart extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
    id: 42 
  } 
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />
      </div>
    )
  }
};

export default chart;
