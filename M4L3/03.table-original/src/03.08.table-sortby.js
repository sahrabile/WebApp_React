import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';

import './App.css';

class Excel08 extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: props.initialData,
      sortby: null,
      descending: false,
    };
    this.sort = this.sort.bind(this);
  }
  sort(e) {

    const column = Number(e.target.dataset.cellIndex);
    const data = clone(this.state.data);

    //toggle descending if already set before
    const descending =
      this.state.sortby === column && !this.state.descending;
    data.sort((a, b) => {
      if (a[column] === b[column]) {
        return 0;
      }
      return descending
        ? a[column] < b[column]
          ? 1
          : -1
        : a[column] > b[column]
          ? 1
          : -1;
    });
    this.setState({
      data,           //Notice you dont have to do data: data if the property and value have same name
      sortby: column,
      descending,
    });
  }

  render() {
    return (
      <table>
        <thead onClick={this.sort}>
          <tr>
            {this.props.headers.map((title, idx) => {
              if (this.state.sortby === idx) {
                title += this.state.descending ? ' \u2191' : ' \u2193';
              }
              return <th key={idx} data-cell-index={idx}>{title}</th>;
            })}
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

Excel08.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  initialData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

export default Excel08;