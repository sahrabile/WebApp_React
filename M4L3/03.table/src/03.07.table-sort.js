import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';

import './App.css';

class Excel07 extends React.Component {
  constructor(props) {
    super();
    this.state = { data: props.initialData };  //shallow copy

    //Bind the <th> onClick event
    this.sort = this.sort.bind(this);
  }

  sort(e) {

    //cellIndex is legacy and unique to <td> and <th> - better to use your own data property, e.g. data-cell-index,
    //cellIndex- Returns a zero-based integer that indicates the position of a cell (td or th) in the cells collection of a table row.
    //const column = e.target.cellIndex;
    const column = Number(e.target.dataset.cellIndex);


    //clone the data, so I do not sort the original data, otherwise I would sort props.initialData
    const sortedData = clone(this.state.data);
    sortedData.sort((a, b) => {
      if (a[column] === b[column]) {
        return 0;
      }
      return a[column] > b[column] ? 1 : -1;
    });

    //Update the state with the sorted data
    //Note that I keep the initial data in props.initialData
    this.setState({ data: sortedData });
  }

  render() {
    return (
      <table>
        <thead onClick={this.sort}>
          <tr>
            {this.props.headers.map((title, idx) => (
              <th key={idx} data-cell-index={idx}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
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

//helper function to clone an object using deep copy. 
function clone(o) {
  return JSON.parse(JSON.stringify(o));
}

Excel07.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  initialData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

export default Excel07;