import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';

class Excel05 extends React.Component {
  constructor(props) {
    super();

    //Here a create a state object containing the initial data
    //I simply let React take care of re-rendering if the state (in this case initialData) will change
    this.state = { data: props.initialData };
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.headers.map((title, idx) => (
              <th key={idx}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/*I use nested Array.prototype.map to loop trough a two dimensional array*/}
          {this.state.data.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, idx) => (
                <td key={idx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Excel05;